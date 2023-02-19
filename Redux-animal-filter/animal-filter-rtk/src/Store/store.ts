import { configureStore } from "@reduxjs/toolkit";
import { animalsApi } from "../API/AnimalsApi";

const store = configureStore({
    reducer: {
      [animalsApi.reducerPath]: animalsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(animalsApi.middleware),
});

export default store;