import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { formData } from '../data/data';
import { Countries, countries } from '../data/countries';

export interface FormItem {
  name: string;
  age: number;
  email: string;
  password: string;
  gender: 'female' | 'male';
  picture: string; // base64
  country: string;
}

interface FormState {
  data: FormItem[];
  countries: Countries;
}

const initialState: FormState = {
  data: formData,
  countries,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addFormItem(state: FormState, action: PayloadAction<FormItem>) {
      state.data.push(action.payload);
    },
  },
});

export const { addFormItem } = formSlice.actions;
export default formSlice.reducer;
