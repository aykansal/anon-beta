// ActionContext.js
import { createContext, useState } from 'react';

export const ActionContext = createContext();

export const ActionProvider = ({ children }) => {
  const [action, setAction] = useState(null); // Default value for action
  return (
    <ActionContext.Provider value={{ action, setAction }}>
      {children}
    </ActionContext.Provider>
  );
};
