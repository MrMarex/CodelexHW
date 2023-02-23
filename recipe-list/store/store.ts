import { configureStore } from '@reduxjs/toolkit';
import { recipesAPI } from '@/slices/recipesSlice';

const store = configureStore({
    reducer: {
      [recipesAPI.reducerPath]: recipesAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(recipesAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;