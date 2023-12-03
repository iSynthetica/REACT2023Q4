import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { formData } from '../data/data';

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
}

const initialState: FormState = {
  data: formData,
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
