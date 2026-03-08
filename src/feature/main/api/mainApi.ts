import { baseApi } from '../../../app/api/baseApi';
export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  popularity: number;
  adult: boolean;
  original_language: string;
  original_title: string;
  video: boolean;
}

export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

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