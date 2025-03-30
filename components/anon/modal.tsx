import { useState, useEffect } from 'react';
import styles from './styles/Modal.module.css';

const Modal = ({ isOpen, onClose, onWalletSelect }) => {
  const [hasArweaveWallet, setHasArweaveWallet] = useState(false);

  useEffect(() => {
    // Check if arweave wallet is available in the browser
    setHasArweaveWallet(!!window.arweaveWallet);
  }, []);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2>Connect Wallet</h2>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className={styles.walletOptions}>
          {hasArweaveWallet && (
            <button
              className={styles.walletButton}
              onClick={() => onWalletSelect('arweave')}
            >
              Arweave Wallet
            </button>
          )}

          <button
            className={styles.walletButton}
            onClick={() => onWalletSelect('quick')}
          >
            Quick Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
