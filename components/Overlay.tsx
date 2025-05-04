import React from 'react';
import { OverlayConfig } from '../types/types';
import { motion, AnimatePresence } from 'framer-motion';

interface OverlayProps {
  config: OverlayConfig;
  isVisible: boolean;
}

const Overlay: React.FC<OverlayProps> = ({ config, isVisible }) => {
  const getIcon = () => {
    switch (config.type) {
      case 'loading':
        return (
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white" />
        );
      case 'error':
        return (
          <svg
            className="h-12 w-12 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case 'success':
        return (
          <svg
            className="h-12 w-12 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        );
      case 'info':
        return (
          <svg
            className="h-12 w-12 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4"
          >
            <div className="flex flex-col items-center space-y-4">
              {getIcon()}
              {config.title && (
                <h2 className="text-xl font-semibold text-white">
                  {config.title}
                </h2>
              )}
              {config.description && (
                <p className="text-gray-300 text-center">
                  {config.description}
                </p>
              )}
              {config.statusTimeline && config.statusTimeline.length > 0 && (
                <div className="w-full mt-4">
                  <div className="space-y-2">
                    {config.statusTimeline.map((event) => (
                      <div
                        key={event.id}
                        className="flex items-center space-x-2 text-sm text-gray-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span>{event.message}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {config.actionButton && (
                <button
                  onClick={config.actionButton.onClick}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  {config.actionButton.label}
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Overlay;
