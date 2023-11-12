import { ChangeEvent, Dispatch, FormEvent } from 'react';
import { NavigateFunction } from 'react-router-dom';

export const submitHandler = (
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

export const changePerPageHandler = (
  event: ChangeEvent<HTMLSelectElement>,
  cb: Dispatch<React.SetStateAction<number>>,
  navigate: NavigateFunction
): void => {
  cb(Number(event.target.value));
  navigate('/');
};
