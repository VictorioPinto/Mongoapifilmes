import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user/slice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { productSlice } from "./Product/slice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userSlice.reducer);
const persistedProductReducer = persistReducer(
  persistConfig,
  productSlice.reducer
);

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    product: persistedProductReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
