import React, { useState, Dispatch, useContext } from 'react';
import ProductI from '../types/ProductI';

interface ContextProps {
  products: ProductI[];
  total: number;
  totalPages: number;
  setProducts: Dispatch<React.SetStateAction<ProductI[]>>;
  setTotal: Dispatch<React.SetStateAction<number>>;
  setTotalPages: Dispatch<React.SetStateAction<number>>;
}

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
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [products, setProducts] = useState([] as ProductI[]);

  return (
    <AppContext.Provider
      value={{
        products,
        total,
        totalPages,
        setProducts,
        setTotal,
        setTotalPages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
