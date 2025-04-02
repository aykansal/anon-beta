'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useEffect, useState } from 'react';
import { CopyIcon, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

export default function ConnectButton() {
  const [connecting, setConnecting] = useState(false);
  const [disconnecting, setDisconnecting] = useState(false);
  const [copying, setCopying] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleConnectWallet = async () => {
    try {
      setConnecting(true);
      await window.arweaveWallet.connect(
        ['ACCESS_ADDRESS', 'SIGN_TRANSACTION', 'ACCESS_TOKENS'],
        {
          name: 'Anon',
          logo: 'https://arweave.net/jAvd7Z1CBd8gVF2D6ESj7SMCCUYxDX_z3vpp5aHdaYk',
        },
        {
          host: 'g8way.io',
          port: 443,
          protocol: 'https',
        }
      );
      // {
      //   protocol: "http",
      //   host: "localhost",
      //   port: 1984,
      // }
      const address = await window.arweaveWallet.getActiveAddress();
      const trimmedAddress = address.slice(0, 5) + '...' + address.slice(-3);

      // @ts-expect-error ignore
      const tokens = await window.arweaveWallet.userTokens();
      const tokenId = tokens[0].processId;
      // @ts-expect-error ignore
      const balance = await window.arweaveWallet.tokenBalance(tokenId);

      setUserData({
        // @ts-expect-error ignore type error
        balance: `${balance} AR`,
        address,
        trimmedAddress,
      });
    } catch (error) {
      console.error('Error connecting wallet:', error);
    } finally {
      setConnecting(false);
    }
  };

  const handleDisconnectWallet = async () => {
    try {
      setDisconnecting(true);
      await window.arweaveWallet.disconnect();
      setUserData(null);
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
    } finally {
      setDisconnecting(false);
    }
  };

  const handleCopyAddress = () => {
    // @ts-expect-error ignore type error

    if (userData?.address) {
      // @ts-expect-error ignore type error
      navigator.clipboard.writeText(userData.address).then(() => {
        setCopying(true);
        setTimeout(() => setCopying(false), 2000);
      });
    }
  };

  useEffect(() => {
    handleConnectWallet();
  }, []);

  return userData ? (
    <Dialog>
      <DialogTrigger className="flex justify-center items-center space-x-3 bg-linear-to-r hover:bg-linear-to-r from-slate-900 hover:from-slate-800 to-slate-800 hover:to-slate-700 p-2 rounded-lg transition-all duration-200 cursor-pointer">
        <div className="font-medium text-[#A6E433] text-sm">
          {/* @ts-expect-error ignore type error */}
          {userData.balance}
        </div>
        {/* @ts-expect-error ignore type error */}
        <div className="text-gray-400 text-xs">{userData.trimmedAddress}</div>
      </DialogTrigger>

      <DialogContent className="border-slate-700 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 shadow-xl backdrop-blur-xs p-6 border rounded-lg">
        <DialogHeader className="text-center">
          <DialogTitle className="font-semibold text-[#A6E433] text-lg">
            Profile
          </DialogTitle>
        </DialogHeader>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          // className="flex flex-col items-center space-y-4 mt-4"
        >
          <div className="relative w-16 h-16">
            <Image
              src="https://arweave.net/jAvd7Z1CBd8gVF2D6ESj7SMCCUYxDX_z3vpp5aHdaYk"
              alt="Profile Icon"
              className="rounded-full"
              height={64}
              width={64}
            />
          </div>

          <div className="text-center">
            {/* @ts-expect-error ignore type error */}
            <p className="text-gray-300 text-sm">{userData.address}</p>
            {/* @ts-expect-error ignore type error */}
            <p className="text-gray-400 text-xs">{userData.balance}</p>
          </div>

          <div className="flex space-x-3">
            <Button
              onClick={handleCopyAddress}
              className="bg-slate-800 hover:bg-slate-700 text-white transition-colors duration-200"
            >
              {copying ? (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Copied!
                </motion.span>
              ) : (
                <CopyIcon className="w-4 h-4" />
              )}
            </Button>
            <Button
              onClick={handleDisconnectWallet}
              className="bg-red-600 hover:bg-red-500 text-white transition-colors duration-200"
            >
              {disconnecting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                'Disconnect Wallet'
              )}
            </Button>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  ) : (
    <Button
      onClick={handleConnectWallet}
      className="bg-linear-to-r from-[#A6E433] hover:from-[#94cc2d] to-[#94cc2d] hover:to-[#A6E433] text-black transition-all duration-200"
    >
      {connecting ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        'Connect Wallet'
      )}
    </Button>
  );
}
