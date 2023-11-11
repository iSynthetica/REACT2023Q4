import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  createContext,
  useContext,
} from 'react';
import ProductI from '../types/ProductI';

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

export const SearchContext = createContext<ContextProps | undefined>(undefined);

export function useSearchContext() {
  const s = useContext(SearchContext);

  if (s === undefined) {
    throw new Error('Error from SearchContext');
  }

  return s;
}
