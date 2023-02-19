import { configureStore } from '@reduxjs/toolkit';
import animalsReducer from './AnimalSlice';

export const store = configureStore({
    reducer: {
        animals: animalsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
