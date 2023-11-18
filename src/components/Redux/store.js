import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";
import cartReducer from "./Cart/CartSlice";
import userReducer from "./User/userSlice";
import orderReducer from "./orders/orderSlice";
const reducers = combineReducers({
  cart: cartReducer,
  user: userReducer,
  order: orderReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "user"],
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
