import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { cakeOrdered } from '../cake/cakeActions';

type InitialState = {
  numOfIceCreams: number;
};

const initialState: InitialState = {
  numOfIceCreams: 15,
};

export const iceCreamSlice = createSlice({
  name: 'ice cream',
  initialState,
  reducers: {
    iceCreamOrdered(state) {
      state.numOfIceCreams -= 1;
    },
    iceCreamRestocked(state, action: PayloadAction<number>) {
      state.numOfIceCreams += action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIceCreams -= 1;
    });
  },
});
