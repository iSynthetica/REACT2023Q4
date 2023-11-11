import { ChangeEvent, FormEvent, createContext, useContext } from 'react';

interface ContextProps {
  s: string;
  perPage: number;
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
