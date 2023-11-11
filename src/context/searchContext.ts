import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  createContext,
  useContext,
} from 'react';

interface ContextProps {
  s: string;
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
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
