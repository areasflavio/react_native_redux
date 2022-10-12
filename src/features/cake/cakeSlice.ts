import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numOfCakes: 10,
};

export const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    cakeOrdered(state) {
      state.numOfCakes -= 1;
    },
    cakeRestocked(state, action) {
      state.numOfCakes += action.payload;
    },
  },
});