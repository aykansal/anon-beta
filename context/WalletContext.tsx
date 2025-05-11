'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { toast } from 'sonner';
import { connectWallet as connectArweaveWallet, disconnectWallet as disconnectArweaveWallet, getWalletDetails } from '@/lib/arkit';

// Define enum for wallet status for better type safety
export enum WalletStatus {
  DISCONNECTED = 'disconnected',
  CONNECTING = 'connecting',
  CONNECTED = 'connected',
  ERROR = 'error'
}

// Define enum for connection results
export enum WalletConnectionResult {
  CONNECTED = 'connected',
  USER_CANCELLED = 'cancelled',
  ERROR = 'error'
}

// Define interface for wallet connection response
export interface WalletConnectionResponse {
  status: WalletConnectionResult;
  message?: string;
  error?: Error;
}

// Update the context type with the enum
interface WalletContextType {
  walletAddress: string;
  walletStatus: WalletStatus;
  isConnecting: boolean;
  error: string | null;
  connectToWallet: () => Promise<boolean>;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [walletStatus, setWalletStatus] = useState<WalletStatus>(WalletStatus.DISCONNECTED);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Checks if the wallet is already connected
   */
  const checkWalletConnection = async (): Promise<void> => {
    try {
      if (typeof window !== 'undefined' && window.arweaveWallet) {
        const permissions = await window.arweaveWallet?.getPermissions();

        if (permissions && permissions.length > 0) {
          // If we have permissions, get the address using arkit.ts getWalletDetails
          try {
            const details = await getWalletDetails();
            if (details.walletAddress) {
              setWalletAddress(details.walletAddress);
              setWalletStatus(WalletStatus.CONNECTED);
              console.log('Wallet already connected:', details.walletAddress);
              return;
            }
          } catch (err) {
            console.log('Error getting wallet details', err);
          }
        }
      }

      setWalletStatus(WalletStatus.DISCONNECTED);
    } catch (err) {
      console.error('Error checking wallet connection:', err);
      setWalletStatus(WalletStatus.ERROR);
      setError('Failed to check wallet connection');
    }
  };

  // Check wallet connection on component mount
  useEffect(() => {
    // Wait for arweave wallet to be injected
    if (typeof window !== 'undefined') {
      if (window.arweaveWallet) {
        checkWalletConnection();
      } else {
        // Listen for wallet load
        window.addEventListener('arweaveWalletLoaded', () => {
          checkWalletConnection();
        });
      }

      // Cleanup event listener
      return () => {
        window.removeEventListener('arweaveWalletLoaded', () => {
          checkWalletConnection();
        });
      };
    }
  }, []);

  // Listen for wallet switch events
  useEffect(() => {
    const handleWalletSwitch = (e: CustomEvent): void => {
      console.log('Wallet switched to new address:', e.detail?.address);
      if (e.detail?.address) {
        setWalletAddress(e.detail.address);
        setWalletStatus(WalletStatus.CONNECTED);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener(
        'walletSwitch',
        handleWalletSwitch as EventListener
      );
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener(
          'walletSwitch',
          handleWalletSwitch as EventListener
        );
      }
    };
  }, []);

  /**
   * Connect to wallet and handle different connection scenarios
   */
  const connectToWallet = async (): Promise<boolean> => {
    if (walletStatus === WalletStatus.CONNECTED) {
      return true; // Already connected
    }

    try {
      setIsConnecting(true);
      setWalletStatus(WalletStatus.CONNECTING);
      setError(null);

      // Check if wallet is available
      if (typeof window === 'undefined' || !window.arweaveWallet) {
        throw new Error(
          'Arweave wallet extension not found. Please install a compatible wallet.'
        );
      }

      // Use the updated connectWallet from arkit.ts
      const connectionResult = await connectArweaveWallet();

      switch (connectionResult.status) {
        case WalletConnectionResult.CONNECTED:
          // Get wallet details using arkit.ts getWalletDetails
          const details: { walletAddress: string; balance: number } = await getWalletDetails();
          setWalletAddress(details.walletAddress);
          setWalletStatus(WalletStatus.CONNECTED);
          console.log('Wallet connected successfully:', details.walletAddress);
          return true;
          
        case WalletConnectionResult.USER_CANCELLED:
          console.log('User cancelled the wallet connection');
          setWalletStatus(WalletStatus.DISCONNECTED); // Reset to disconnected state
          return false;
          
        case WalletConnectionResult.ERROR:
        default:
          throw connectionResult.error || new Error(connectionResult.message || 'Unknown wallet connection error');
      }
      
    } catch (err) {
      console.error('Error connecting to wallet:', err);
      setWalletStatus(WalletStatus.ERROR);
      const errorMessage = err instanceof Error ? err.message : 'Failed to connect wallet';
      setError(errorMessage);
      toast.error(errorMessage);
      return false;
    } finally {
      console.log('Wallet Connection Process Complete');
      setIsConnecting(false);
    }
  };

  /**
   * Disconnect the wallet
   */
  const handleDisconnectWallet = (): void => {
    try {
      // Use disconnectWallet from arkit.ts
      disconnectArweaveWallet();
      setWalletAddress('');
      setWalletStatus(WalletStatus.DISCONNECTED);
      toast.info('Wallet disconnected');
    } catch (err) {
      console.error('Error disconnecting wallet:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to disconnect wallet';
      toast.error(errorMessage);
    }
  };

  return (
    <WalletContext.Provider
      value={{
        walletAddress,
        walletStatus,
        isConnecting,
        error,
        connectToWallet,
        disconnectWallet: handleDisconnectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

/**
 * Custom hook to use the wallet context
 */
export function useWallet(): WalletContextType {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
}