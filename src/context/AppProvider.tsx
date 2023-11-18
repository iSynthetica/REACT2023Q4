import React, { useState, Dispatch, ChangeEvent, useContext } from 'react';
import ProductI from '../types/ProductI';
import { useNavigate, useParams } from 'react-router-dom';
import { changePerPageHandler } from '../utils/handlers';

interface ContextProps {
  products: ProductI[];
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  setProducts: Dispatch<React.SetStateAction<ProductI[]>>;
  setTotal: Dispatch<React.SetStateAction<number>>;
  setTotalPages: Dispatch<React.SetStateAction<number>>;
  onChangePageHandler: (event: ChangeEvent<HTMLSelectElement>) => void;
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
  const [perPage, setPerPage] = useState(25);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [products, setProducts] = useState([] as ProductI[]);

  const navigate = useNavigate();

  const onChangePageHandler = (event: ChangeEvent<HTMLSelectElement>): void => {
    changePerPageHandler(event, setPerPage, navigate);
  };
  return (
    <AppContext.Provider
      value={{
        products,
        page: page ? Number(page) : 1,
        perPage,
        total,
        totalPages,
        setProducts,
        setTotal,
        setTotalPages,
        onChangePageHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
