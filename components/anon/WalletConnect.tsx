import { useState, useEffect } from 'react';
import {
  connectWallet,
  //  useQuickWallet
} from '@/lib/arkit';

//@ts-expect-error ignore
export const Modal = ({ isOpen, onClose, onWalletSelect }) => {
  const [hasArweaveWallet, setHasArweaveWallet] = useState(false);

  useEffect(() => {
    // Check if arweave wallet is available in the browser
    setHasArweaveWallet(!!window.arweaveWallet);
  }, []);

  if (!isOpen) return null;

  return (
    <div>
      <div>
        <div>
          <h2>Connect Wallet</h2>
          <button onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>

        <div>
          {hasArweaveWallet && (
            <button onClick={() => onWalletSelect('arweave')}>
              Arweave Wallet
            </button>
          )}

          <button onClick={() => onWalletSelect('quick')}>Quick Wallet</button>
        </div>
      </div>
    </div>
  );
};

//@ts-expect-error ignore
const ProfileModal = ({ isOpen, onClose, walletData, onDisconnect }) => {
  if (!isOpen) return null;

  return (
    <div onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <div>
          <h2>Profile</h2>
          <button onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>

        <div>
          <div>
            <div>
              {/* Default avatar circle with first letter of address */}
              {walletData.address[0]}
            </div>
          </div>

          <div>
            <div>
              <span>Address</span>
              <span>{walletData.address}</span>
            </div>

            <div>
              <span>Balance</span>
              <span>0 AR</span>
            </div>

            <div>
              <span>Wallet Type</span>
              <span>{walletData.type}</span>
            </div>
          </div>

          <button onClick={onDisconnect}>Disconnect</button>
        </div>
      </div>
    </div>
  );
};

const WalletConnect = ({
  //@ts-expect-error ignore
  onWalletConnected, // Optional callback when wallet is connected
  buttonText = 'Connect Wallet', // Optional custom button text
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [walletData, setWalletData] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);

  // Check if wallet is already connected on mount
  useEffect(() => {
    const checkWalletConnection = async () => {
      if (window.arweaveWallet) {
        try {
          const address = await window.arweaveWallet.getActiveAddress();
          if (address) {
            //@ts-expect-error ignore

            setWalletData({ type: 'arweave', address });
          }
        } catch (error) {
          console.log('No active wallet connection' + error);
        }
      }
    };

    checkWalletConnection();
  }, []);

  //@ts-expect-error ignore
  const handleWalletSelect = async (walletType) => {
    try {
      setIsConnecting(true);
      let connectionData;

      if (walletType === 'arweave') {
        const status = await connectWallet();
        if (status === 'connected wallet successfully') {
          if (!window.arweaveWallet) {
            throw new Error('Arweave wallet not found');
          }
          const address = await window.arweaveWallet.getActiveAddress();

          //@ts-expect-error ignore
          connectionData = { type: 'arweave', address };
        }
      } else {
        // const quickWalletData = await useQuickWallet();
        // connectionData = {
        //   type: 'quick',
        //   address: quickWalletData.address,
        //   key: quickWalletData.key,
        // };
      }

      if (connectionData) {
        setWalletData(connectionData);
        onWalletConnected?.(connectionData);
      }
    } catch (error) {
      console.error('Wallet connection error:', error);
      // You might want to show an error message to the user here
    } finally {
      setIsConnecting(false);
      setIsModalOpen(false);
    }
  };

  const disconnectWallet = async () => {
    //@ts-expect-error ignore
    if (walletData?.type === 'arweave') {
      try {
        if (!window.arweaveWallet) {
          throw new Error('Arweave wallet not found');
        }
        await window.arweaveWallet.disconnect();
      } catch (error) {
        console.error('Error disconnecting wallet:', error);
      }
    }
    setWalletData(null);
    setIsProfileOpen(false);
  };

  return (
    <div>
      {!walletData ? (
        <button onClick={() => setIsModalOpen(true)} disabled={isConnecting}>
          {isConnecting ? 'Connecting...' : buttonText}
        </button>
      ) : (
        <button onClick={() => setIsProfileOpen(true)}>
          <div>
            <div />
            <span>
              {/* @ts-expect-error ignore */}
              {walletData.address.slice(0, 4)}...{walletData.address.slice(-4)}
            </span>
            <span>0 AR</span>
          </div>
        </button>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onWalletSelect={handleWalletSelect}
      />

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        walletData={walletData}
        onDisconnect={disconnectWallet}
      />
    </div>
  );
};

export default WalletConnect;
