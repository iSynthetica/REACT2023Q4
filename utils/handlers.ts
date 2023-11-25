import { ChangeEvent, Dispatch, FormEvent } from 'react';
import { setSearchInput, setPerPage } from '../state/shopSlice';
import { AnyAction } from '@reduxjs/toolkit';
import { NextRouter } from 'next/router';

export const submitHandler = (
  event: FormEvent<HTMLFormElement>,
  cb: Dispatch<AnyAction>,
  router: NextRouter
): void => {
  event.preventDefault();
  const target = event.target as typeof event.target & {
    s: { value: string };
  };

  const s = target.s.value.trim();

  localStorage.setItem('searchInput', s);
  cb(setSearchInput(s));
  router.push('/');
};

export const changePerPageHandler = (
  event: ChangeEvent<HTMLSelectElement>,
  cb: Dispatch<AnyAction>,
  router: NextRouter
): void => {
  cb(setPerPage(Number(event.target.value)));
  router.push('/');
};
