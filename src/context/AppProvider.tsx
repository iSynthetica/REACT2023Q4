import React, { useState, Dispatch, useContext } from 'react';
import ProductI from '../types/ProductI';
import { useParams } from 'react-router-dom';

interface ContextProps {
  products: ProductI[];
  page: number;
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
  const { page } = useParams();
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [products, setProducts] = useState([] as ProductI[]);

  return (
    <AppContext.Provider
      value={{
        products,
        page: page ? Number(page) : 1,
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
