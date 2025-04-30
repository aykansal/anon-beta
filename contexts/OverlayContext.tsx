import React, { createContext, useContext, useState, useCallback } from 'react';
import { OverlayConfig } from '../types/types';

interface OverlayContextType {
  showOverlay: (config: OverlayConfig) => void;
  hideOverlay: () => void;
  currentOverlay: OverlayConfig | null;
  isVisible: boolean;
  addTimelineEvent: (message: string) => void;
  clearTimeline: () => void;
}

const OverlayContext = createContext<OverlayContextType | undefined>(undefined);

export const OverlayProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentOverlay, setCurrentOverlay] = useState<OverlayConfig | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const showOverlay = useCallback((config: OverlayConfig) => {
    console.log('Showing overlay:', config);
    setCurrentOverlay(config);
    setIsVisible(true);
  }, []);

  const hideOverlay = useCallback(() => {
    console.log('Hiding overlay');
    setIsVisible(false);
    // Small delay before clearing the config to allow animations to complete
    setTimeout(() => setCurrentOverlay(null), 300);
  }, []);

  const addTimelineEvent = useCallback((message: string) => {
    console.log('Adding timeline event:', message);
    if (currentOverlay?.statusTimeline) {
      const newEvent = {
        id: Date.now().toString(),
        message,
        timestamp: Date.now(),
      };
      setCurrentOverlay({
        ...currentOverlay,
        statusTimeline: [...currentOverlay.statusTimeline, newEvent],
      });
    }
  }, [currentOverlay]);

  const clearTimeline = useCallback(() => {
    console.log('Clearing timeline');
    if (currentOverlay?.statusTimeline) {
      setCurrentOverlay({
        ...currentOverlay,
        statusTimeline: [],
      });
    }
  }, [currentOverlay]);

  return (
    <OverlayContext.Provider
      value={{
        showOverlay,
        hideOverlay,
        currentOverlay,
        isVisible,
        addTimelineEvent,
        clearTimeline,
      }}
    >
      {children}
    </OverlayContext.Provider>
  );
};

export const useOverlay = () => {
  const context = useContext(OverlayContext);
  if (context === undefined) {
    throw new Error('useOverlay must be used within an OverlayProvider');
  }
  return context;
}; 