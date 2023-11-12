import React, {
  useState,
  Dispatch,
  FormEvent,
  ChangeEvent,
  useContext,
} from 'react';
import ProductI from '../types/ProductI';
import { useNavigate, useParams } from 'react-router-dom';
import { changePerPageHandler, submitHandler } from '../utils/handlers';

interface ContextProps {
  s: string;
  products: ProductI[];
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  setProducts: Dispatch<React.SetStateAction<ProductI[]>>;
  setTotal: Dispatch<React.SetStateAction<number>>;
  setTotalPages: Dispatch<React.SetStateAction<number>>;
  onSubmitHandler: (event: FormEvent<HTMLFormElement>) => void;
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
  const [s, setSearch] = useState(localStorage.getItem('searchInput') || '');
  const [perPage, setPerPage] = useState(25);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [products, setProducts] = useState([] as ProductI[]);

  const navigate = useNavigate();

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    submitHandler(event, setSearch, navigate);
  };

  const onChangePageHandler = (event: ChangeEvent<HTMLSelectElement>): void => {
    changePerPageHandler(event, setPerPage, navigate);
  };
  return (
    <AppContext.Provider
      value={{
        s,
        products,
        page: page ? Number(page) : 1,
        perPage,
        total,
        totalPages,
        setProducts,
        setTotal,
        setTotalPages,
        onSubmitHandler,
        onChangePageHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
