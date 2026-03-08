import { MovieCard } from '../MovieCard/MovieCard';
import { MovieRow } from '../MovieRow/MovieRow';
import {
  useGetNowPlayingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery
} from '../../api/mainApi';

interface MoviesListProps {
  category: 'popular' | 'topRated' | 'upcoming' | 'nowPlaying';
  title: string;
  viewMoreLink: string;
  limit?: number;
}

export const MoviesList = ({ category, title, viewMoreLink, limit = 6 }: MoviesListProps) => {
  const getQueryHook = () => {
    switch (category) {
      case 'popular':
        return useGetPopularMoviesQuery;
      case 'topRated':
        return useGetTopRatedMoviesQuery;
      case 'upcoming':
        return useGetUpcomingMoviesQuery;
      case 'nowPlaying':
        return useGetNowPlayingMoviesQuery;
      default:
        return useGetPopularMoviesQuery;
    }
  };

  // Используем хук с правильными параметрами
  const useMoviesQuery = getQueryHook();
  const { data, isLoading, error } = useMoviesQuery();

  // Обработка состояния загрузки
  if (isLoading) {
    return (
      <MovieRow title={title} viewMoreLink={viewMoreLink}>
        <div>Loading...</div>
      </MovieRow>
    );
  }

  // Обработка ошибки
  if (error) {
    console.error('Error loading movies:', error);
    return (
      <MovieRow title={title} viewMoreLink={viewMoreLink}>
        <div>Error loading movies</div>
      </MovieRow>
    );
  }

  const movies = data?.results?.slice(0, limit) || [];

  // Если нет фильмов, не показываем ряд
  if (movies.length === 0) {
    return null;
  }

  return (
    <MovieRow title={title} viewMoreLink={viewMoreLink}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
          voteAverage={movie.vote_average}
        />
      ))}
    </MovieRow>
  );
};