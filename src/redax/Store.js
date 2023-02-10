import { configureStore, createReducer } from '@reduxjs/toolkit';
import { persistClickReduser } from './Slise';

import persistStore from 'redux-persist/es/persistStore';

// const myReduser = createReducer(10, {});

export const store = configureStore({
  reducer: {
    value: persistClickReduser,
  },
});

export const persistor = persistStore(store);
