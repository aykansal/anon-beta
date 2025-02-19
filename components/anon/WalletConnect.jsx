import { useState, useEffect } from 'react';
import { connectWallet, useQuickWallet } from '@/lib/arkit';
import Modal from './modal';
import { Button } from '../ui/button';
import styles from './styles/WalletConnect.module.css';

const ProfileModal = ({ isOpen, onClose, walletData, onDisconnect }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.profileOverlay} onClick={onClose}>
      <div
        className={styles.profileContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.profileHeader}>
          <h2>Profile</h2>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className={styles.profileBody}>
          <div className={styles.avatarSection}>
            <div className={styles.avatar}>
              {/* Default avatar circle with first letter of address */}
              {walletData.address[0]}
            </div>
          </div>

          <div className={styles.walletDetails}>
            <div className={styles.addressSection}>
              <span className={styles.label}>Address</span>
              <span className={styles.address}>{walletData.address}</span>
            </div>

            <div className={styles.balanceSection}>
              <span className={styles.label}>Balance</span>
              <span className={styles.balance}>0 AR</span>
            </div>

            <div className={styles.walletType}>
              <span className={styles.label}>Wallet Type</span>
              <span className={styles.type}>{walletData.type}</span>
            </div>
          </div>

          <Button
            onClick={onDisconnect}
            className={styles.disconnectButton}
            variant="destructive"
          >
            Disconnect
          </Button>
        </div>
      </div>
    </div>
  );
};

const WalletConnect = ({
  onWalletConnected, // Optional callback when wallet is connected
  buttonClassName, // Optional custom button styling
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
            setWalletData({ type: 'arweave', address });
          }
        } catch (error) {
          console.log('No active wallet connection');
        }
      }
    };

    checkWalletConnection();
  }, []);

  const handleWalletSelect = async (walletType) => {
    try {
      setIsConnecting(true);
      let connectionData;

      if (walletType === 'arweave') {
        const status = await connectWallet();
        if (status === 'connected wallet successfully') {
          const address = await window.arweaveWallet.getActiveAddress();
          connectionData = { type: 'arweave', address };
        }
      } else {
        const quickWalletData = await useQuickWallet();
        connectionData = {
          type: 'quick',
          address: quickWalletData.address,
          key: quickWalletData.key,
        };
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
    if (walletData?.type === 'arweave') {
      try {
        await window.arweaveWallet.disconnect();
      } catch (error) {
        console.error('Error disconnecting wallet:', error);
      }
    }
    setWalletData(null);
    setIsProfileOpen(false);
  };

  return (
    <div className={styles.container}>
      {!walletData ? (
        <Button
          onClick={() => setIsModalOpen(true)}
          className={buttonClassName}
          disabled={isConnecting}
        >
          {isConnecting ? 'Connecting...' : buttonText}
        </Button>
      ) : (
        <Button
          onClick={() => setIsProfileOpen(true)}
          className={styles.walletButton}
          variant="outline"
        >
          <div className={styles.walletButtonContent}>
            <div className={styles.walletIndicator} />
            <span>
              {walletData.address.slice(0, 4)}...{walletData.address.slice(-4)}
            </span>
            <span className={styles.balance}>0 AR</span>
          </div>
        </Button>
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
