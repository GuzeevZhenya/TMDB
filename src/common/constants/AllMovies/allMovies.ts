// common/constants/AllMovies/allMovies.ts
import { mockMovies } from "../../mock/movies";

// Преобразуем моковые данные в формат, похожий на API
export const ALL_MOVIES = [
  ...mockMovies.popular.map(movie => ({
    ...movie,
    genre_ids: movie.genres, // Переименовываем genres -> genre_ids
    popularity: movie.vote_average * 10, // Добавляем popularity на основе рейтинга
  })),
  ...mockMovies.topRated.map(movie => ({
    ...movie,
    genre_ids: movie.genres,
    popularity: movie.vote_average * 10,
  })),
  ...mockMovies.upcoming.map(movie => ({
    ...movie,
    genre_ids: movie.genres,
    popularity: movie.vote_average * 10 || 50, // Для новых фильмов
  })),
  ...mockMovies.nowPlaying.map(movie => ({
    ...movie,
    genre_ids: movie.genres,
    popularity: movie.vote_average * 10,
  })),
];