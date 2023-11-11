import { createContext, useContext } from 'react';

export const SearchContext = createContext<string | undefined>(undefined);

export function useSearchContext() {
  const s = useContext(SearchContext);

  if (s === undefined) {
    throw new Error('Error from SearchContext');
  }

  return s;
}
