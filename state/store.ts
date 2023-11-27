import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './shopSlice';
import { productsApi } from '../api/products';
import { createWrapper } from 'next-redux-wrapper';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    shop: shopReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper(() => store);
