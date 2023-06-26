'use client'
import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { SearchPageReducer } from '@/pages/SearchPage';
import { api } from '@/shared/api/api';
import { CartReducer } from '@/entity/cart';

// create a makeStore function
export const store = configureStore({
    reducer: {
        searchPage: SearchPageReducer,
        cart: CartReducer,
        api: api.reducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export type AppStore = ReturnType<typeof configureStore<StateSchema>>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

