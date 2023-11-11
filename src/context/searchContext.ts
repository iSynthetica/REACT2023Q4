import { createContext, useContext } from 'react';

interface ContextProps {
  s: string;
  perPage: number;
}

export const SearchContext = createContext<ContextProps | undefined>(undefined);

export function useSearchContext() {
  const s = useContext(SearchContext);

  if (s === undefined) {
    throw new Error('Error from SearchContext');
  }

  return s;
}
