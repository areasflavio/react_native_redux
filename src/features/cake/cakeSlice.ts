import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  numOfCakes: number;
};

const initialState: InitialState = {
  numOfCakes: 10,
};

export const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    cakeOrdered(state) {
      state.numOfCakes -= 1;
    },
    cakeRestocked(state, action: PayloadAction<number>) {
      state.numOfCakes += action.payload;
    },
  },
});
