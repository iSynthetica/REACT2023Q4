import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import ProductI from '../types/ProductI';

interface ShopState {
  s: string;
  perPage: number;
  page: number;
  total: number;
  totalPages: number;
  products: ProductI[];
}

const initialState: ShopState = {
  s:
    typeof window !== 'undefined'
      ? window.localStorage.getItem('searchInput') || ''
      : '',
  perPage: 10,
  page: 1,
  total: 0,
  totalPages: 0,
  products: [],
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setSearchInput: (state, action: PayloadAction<string>) => {
      state.s = action.payload;
    },
    setPerPage: (state, action: PayloadAction<number>) => {
      state.perPage = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
    setProducts: (state, action: PayloadAction<ProductI[]>) => {
      state.products = action.payload;
    },
  },
});

export const {
  setSearchInput,
  setPerPage,
  setPage,
  setTotal,
  setTotalPages,
  setProducts,
} = shopSlice.actions;

export default shopSlice.reducer;
