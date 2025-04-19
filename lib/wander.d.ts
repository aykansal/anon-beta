// Declaration file for Wander wallet
interface ArweaveWallet {
  getActiveAddress: () => Promise<string>;
  getPermissions: () => Promise<string[]>;
  connect: (
    permissions: string[],
    appInfo?: {
      name?: string;
      logo?: string;
    },
    gateway?: {
      host: string;
      port: number;
      protocol: 'http' | 'https';
    }) => Promise<void>;
  disconnect: () => Promise<void>;
  events?: {
    on: (event: string, callback: (data: unknown) => void) => (() => void);
  };
  userTokens: () => Promise<[]>;
  tokenBalance: (tokenId: string) => Promise<number>;
}

// Custom events for Wander wallet
interface WalletSwitchEvent extends CustomEvent {
  detail: {
    address?: string;
  };
}

declare interface Window {
  arweaveWallet?: ArweaveWallet;
}

// Declare custom events
declare global {
  interface WindowEventMap {
    'arweaveWalletLoaded': Event;
    'walletSwitch': WalletSwitchEvent;
  }
}