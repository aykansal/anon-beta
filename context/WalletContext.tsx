'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { toast } from 'sonner';
import { connectWallet, disconnectWallet, getWalletDetails } from '@/lib/arkit';

type WalletStatus = 'disconnected' | 'connecting' | 'connected' | 'error';

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
  const [walletStatus, setWalletStatus] = useState<WalletStatus>('disconnected');
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check wallet connection on component mount
  useEffect(() => {
    const checkWalletConnection = async () => {
      try {
        if (typeof window !== 'undefined' && window.arweaveWallet) {
          const permissions = await window.arweaveWallet?.getPermissions();
          
          if (permissions && permissions.length > 0) {
            // If we have permissions, get the address using arkit.ts getWalletDetails
            try {
              const details = await getWalletDetails();
              if (details.walletAddress) {
                setWalletAddress(details.walletAddress);
                setWalletStatus('connected');
                console.log('Wallet already connected:', details.walletAddress);
                return;
              }
            } catch (err) {
              console.log('Error getting wallet details', err);
            }
          }
        }
        
        setWalletStatus('disconnected');
      } catch (err) {
        console.error('Error checking wallet connection:', err);
        setWalletStatus('error');
        setError('Failed to check wallet connection');
      }
    };

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
    }
  }, []);

  // Listen for wallet switch events
  useEffect(() => {
    const handleWalletSwitch = (e: CustomEvent) => {
      console.log('Wallet switched to new address:', e.detail?.address);
      if (e.detail?.address) {
        setWalletAddress(e.detail.address);
        setWalletStatus('connected');
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('walletSwitch', handleWalletSwitch as EventListener);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('walletSwitch', handleWalletSwitch as EventListener);
      }
    };
  }, []);

  const connectToWallet = async (): Promise<boolean> => {
    if (walletStatus === 'connected') {
      return true; // Already connected
    }

    try {
      setIsConnecting(true);
      setWalletStatus('connecting');
      setError(null);

      // Check if wallet is available
      if (typeof window === 'undefined' || !window.arweaveWallet) {
        throw new Error('Arweave wallet extension not found. Please install a compatible wallet.');
      }

      // Use connectWallet from arkit.ts
      const connection = await connectWallet();
      
      if (connection === 'connected wallet successfully') {
        // Get wallet details using arkit.ts getWalletDetails
        const details = await getWalletDetails();
        setWalletAddress(details.walletAddress);
        setWalletStatus('connected');
        console.log('Wallet connected successfully:', details.walletAddress);
        return true;
      } else {
        throw new Error('Wallet connection failed');
      }
    } catch (err) {
      console.error('Error connecting to wallet:', err);
      setWalletStatus('error');
      setError(err instanceof Error ? err.message : 'Failed to connect wallet');
      toast.error(err instanceof Error ? err.message : 'Failed to connect wallet');
      return false;
    } finally {
      setIsConnecting(false);
    }
  };

  const handleDisconnectWallet = () => {
    try {
      // Use disconnectWallet from arkit.ts
      disconnectWallet();
      setWalletAddress('');
      setWalletStatus('disconnected');
      toast.info('Wallet disconnected');
    } catch (err) {
      console.error('Error disconnecting wallet:', err);
      toast.error('Failed to disconnect wallet');
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

export function useWallet() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
} 