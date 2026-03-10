import { baseApi } from '../../../app/api/baseApi';
 

export const mainApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPopularMovies: builder.query<MoviesResponse, void>({
      query: () => '/movie/popular',
    }),
    getNowPlayingMovies: builder.query<MoviesResponse, void>({
      query: () => '/movie/now_playing',
    }),
    getTopRatedMovies: builder.query<MoviesResponse, void>({
      query: () => '/movie/top_rated',
    }),
    getUpcomingMovies: builder.query<MoviesResponse, void>({
      query: () => '/movie/upcoming',
    }),
  }),
});

export const { useGetPopularMoviesQuery, useGetUpcomingMoviesQuery, useGetTopRatedMoviesQuery, useGetNowPlayingMoviesQuery } = mainApi