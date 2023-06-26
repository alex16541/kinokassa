import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartSchema } from '../types/CartSchema';
import { Film } from '@/entity/film';


const initialState: CartSchema = {
    tickets: []
};

export const CartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addTicket(state, {payload: film}: PayloadAction<Film>){
            const searchFilm = state.tickets.find((t) => t.id === film.id);

            if (searchFilm) {
                searchFilm.count++;
            } else {
                state.tickets.push({...film, count: 1});
            }
        },
        deleteTicket(state, {payload: film}: PayloadAction<Film>){
            const searchFilm = state.tickets.find((t) => t.id === film.id);

            if (searchFilm) {
                searchFilm.count--;

                if(searchFilm.count <= 0){
                    state.tickets = state.tickets.filter(t=>t.id !== film.id);
                }
            }
        },
        deleteAllTicketsByFilmId(state, {payload: filmId}: PayloadAction<string>){
            state.tickets = state.tickets.filter(t=>t.id !== filmId)
        }
    },
});
export const { actions: CartActions, reducer: CartReducer } = CartSlice;