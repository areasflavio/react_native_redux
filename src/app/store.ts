import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import { cakeReducer } from '../features/cake/cakeReducer';
import { iceCreamReducer } from '../features/iceCream/iceCreamReducer';

const logger = createLogger();

export const store = configureStore({
  reducer: { cake: cakeReducer, iceCream: iceCreamReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
