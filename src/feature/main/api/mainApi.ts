// Во избежание ошибок импорт должен быть из `@reduxjs/toolkit/query/react`
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

// Базовый URL из документации
 
// `createApi` - функция из `RTK Query`, позволяющая создать объект `API`
// для взаимодействия с внешними `API` и управления состоянием приложения
export const mainApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: () => '/movie/popular?language=en-US&page=1',
    }),
  }),
})
 
// `createApi` создает объект `API`, который содержит все эндпоинты в виде хуков,
// определенные в свойстве `endpoints`
export const {  useGetPopularMoviesQuery } = mainApi