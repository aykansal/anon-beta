'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type ModalType = 'createProject' | 'github' | 'projectInfo';

interface ModalContextType {
  isOpen: Record<ModalType, boolean>;
  projectName: string;
  openModal: (type: ModalType) => void;
  closeModal: (type: ModalType) => void;
  setProjectName: (name: string) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState<Record<ModalType, boolean>>({
    createProject: false,
    github: false,
    projectInfo: false,
  });
  const [projectName, setProjectName] = useState<string>('');

  const openModal = (type: ModalType) => {
    // console.log(`Opening modal: ${type}`);
    setIsOpen((prev) => ({ ...prev, [type]: true }));
  };

  const closeModal = (type: ModalType) => {
    // console.log(`Closing modal: ${type}`);
    setIsOpen((prev) => ({ ...prev, [type]: false }));
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        projectName,
        openModal,
        closeModal,
        setProjectName,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
