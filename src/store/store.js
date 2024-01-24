import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './sliceContacts';
import { filterReducer } from './sliceFilter';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authReducer } from './auth/slice';
 
const persistConfig = {
  key: 'token',
  storage,
  whiteList: ['token'],
};

const persistReducerAuth = persistReducer(persistConfig, authReducer);

const reducer = {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistReducerAuth,
};

export const store = configureStore({ reducer });

export const persistor = persistStore(store);