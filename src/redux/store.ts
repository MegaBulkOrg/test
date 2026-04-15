/* eslint-disable @typescript-eslint/no-unused-vars */
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";

import { lessonsApi } from "./api/lessonsApi";
// импорты API
import authReducer from "./slices/authSlice";

const createNoopStorage = () => ({
  getItem: async (_key: string) => null,
  setItem: async (_key: string, value: string) => value,
  removeItem: async (_key: string) => {},
});

const browserStorage = {
  getItem: (key: string) => Promise.resolve(localStorage.getItem(key)),
  setItem: (key: string, value: string) => {
    localStorage.setItem(key, value);
    return Promise.resolve(value);
  },
  removeItem: (key: string) => {
    localStorage.removeItem(key);
    return Promise.resolve();
  },
};

const safeStorage = typeof window !== "undefined" ? browserStorage : createNoopStorage();

const rootReducer = combineReducers({
  auth: authReducer,
  [lessonsApi.reducerPath]: lessonsApi.reducer,
});

const persistConfig = {
  key: "root",
  storage: safeStorage,
  whitelist: [],
};

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(lessonsApi.middleware),
});

export const persistor = persistStore(store);
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
