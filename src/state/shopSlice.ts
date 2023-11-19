import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ShopState {
  s: string;
  perPage: number;
  page: number;
}

const initialState: ShopState = {
  s: localStorage.getItem('searchInput') || '',
  perPage: 25,
  page: 1,
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
  },
});

export const { setSearchInput, setPerPage, setPage } = shopSlice.actions;

export default shopSlice.reducer;
