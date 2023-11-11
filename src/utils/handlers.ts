import { Dispatch, FormEvent } from 'react';
import { NavigateFunction } from 'react-router-dom';

export const onSearchSubmitHandler = (
  event: FormEvent<HTMLFormElement>,
  cb: Dispatch<React.SetStateAction<string>>,
  navigate: NavigateFunction
): void => {
  event.preventDefault();
  const target = event.target as typeof event.target & {
    s: { value: string };
  };

  const s = target.s.value.trim();

  localStorage.setItem('searchInput', s);
  cb(s);
  navigate('/');
};
