import React, { useContext } from 'react';

interface ContextProps {}

export const AppContext = React.createContext<ContextProps | undefined>(
  undefined
);

export function useAppContext() {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error('Error from AppContext');
  }

  return context;
}

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default AppProvider;
