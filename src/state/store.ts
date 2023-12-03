import { configureStore } from '@reduxjs/toolkit';
import formSlice from './formSlice';

export const store = configureStore({
  reducer: {
    form: formSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type FormDispatch = typeof store.dispatch;
