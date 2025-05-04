'use client';

// ActionContext.js
import { createContext, useState } from 'react';

// @ts-expect-error ignore,
export const ActionContext = createContext();

// @ts-expect-error ignore,
export const ActionProvider = ({ children }) => {
  const [action, setAction] = useState(null); // Default value for action
  return (
    <ActionContext.Provider value={{ action, setAction }}>
      {children}
    </ActionContext.Provider>
  );
};
