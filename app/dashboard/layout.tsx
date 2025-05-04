'use client';

import React from 'react';
import { ModalProvider } from '@/context/ModalContext';
import { GitHubProvider } from '@/context/GitHubContext';
import { ProjectProvider } from '@/context/ProjectContext';
import { WalletProvider } from '@/context/WalletContext';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <WalletProvider>
      <ProjectProvider>
        <ModalProvider>
          <GitHubProvider>{children}</GitHubProvider>
        </ModalProvider>
      </ProjectProvider>
    </WalletProvider>
  );
};

export default Layout;
