import { ChangeEvent, Dispatch, FormEvent } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { setSearchInput, setPerPage } from '../state/shopSlice';
import { AnyAction } from '@reduxjs/toolkit';

export const submitHandler = (
  event: FormEvent<HTMLFormElement>,
  cb: Dispatch<AnyAction>,
  navigate: NavigateFunction
): void => {
  event.preventDefault();
  const target = event.target as typeof event.target & {
    s: { value: string };
  };

  const s = target.s.value.trim();

  localStorage.setItem('searchInput', s);
  cb(setSearchInput(s));
  navigate('/');
};

export const changePerPageHandler = (
  event: ChangeEvent<HTMLSelectElement>,
  cb: Dispatch<AnyAction>,
  navigate: NavigateFunction
): void => {
  cb(setPerPage(Number(event.target.value)));
  navigate('/');
};
