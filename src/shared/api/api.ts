import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Film } from '@/entity/film';
import { Cinema } from '@/entity/cinema';
import { comment } from '@/entity/comment';

// Define a service using a base URL and expected endpoints
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),
    endpoints: (builder) => ({
        getFilms: builder.query<Film[], void>({
            query: () => '/movies',
        }),
        getFilmsByCinema: builder.query<Film[], string | undefined>({
            query: (cinemaId) => cinemaId ? `/movies?cinemaId=${cinemaId}` : '/movies',
        }),
        getCinemas: builder.query<Cinema[], void>({
            query: () => '/cinemas'
        }),
        getFilmById: builder.query<Film, string>({
            query: (id) => `/movie?movieId=${id}`,
        }),
        getReviewsByFilmId: builder.query<comment[], string>({
            query: (id) => `/reviews?movieId=${id}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetFilmsQuery,
    useGetFilmsByCinemaQuery,
    useGetCinemasQuery,
    useGetFilmByIdQuery,
    useGetReviewsByFilmIdQuery
} = api;