import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import contactsReducer from "../redux/contacts/slice";
import filtersReducer from "../redux/filters/slice";
import authReduser from "../redux/auth/slice";

const persistAuthConfig = {
  key: "jwt-token",
  storage,
};

const persistedAuthReducer = persistReducer(persistAuthConfig, authReduser);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
