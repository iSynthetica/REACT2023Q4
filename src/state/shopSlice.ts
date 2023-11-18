import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ShopState {
  s: string;
  perPage: number;
}

const initialState: ShopState = {
  s: localStorage.getItem('searchInput') || '',
  perPage: 25,
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setSearchInput: (state, action: PayloadAction<string>) => {
      state.s = action.payload;
    },
    setPerPage: (state, action: PayloadAction<string>) => {
      state.perPage = Number(action.payload);
    },
  },
});

export const { setSearchInput } = shopSlice.actions;

export default shopSlice.reducer;
