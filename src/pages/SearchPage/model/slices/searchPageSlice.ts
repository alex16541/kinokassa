'use client'
import { createSlice } from '@reduxjs/toolkit';
import { SearchPageSchema } from '../types/SearchPageSchema';

const initialState: SearchPageSchema = {
    films: [],
    _inited: false,
};

export const SearchPageSlice = createSlice({
    name: 'SearchPage',
    initialState,
    reducers: {

    },
});

export const { actions: SearchPageActions, reducer: SearchPageReducer } = SearchPageSlice;