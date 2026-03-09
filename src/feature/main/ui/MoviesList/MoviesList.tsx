import { mockMovies } from '@/common/mock/movies';
import {
  useGetNowPlayingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery
} from '../../api/mainApi';
import { MovieRow } from '../MovieRow/MovieRow';
import { MovieCard } from '../MovieCard/MovieCard';

const USE_MOCK = true;

const useMockPopularMovies = () => ({
  data: { results: mockMovies.popular },
  isLoading: false,
  error: null
});

const useMockTopRatedMovies = () => ({
  data: { results: mockMovies.topRated },
  isLoading: false,
  error: null
});

const useMockUpcomingMovies = () => ({
  data: { results: mockMovies.upcoming },
  isLoading: false,
  error: null
});

const useMockNowPlayingMovies = () => ({
  data: { results: mockMovies.nowPlaying },
  isLoading: false,
  error: null
});

interface MoviesListProps {
  category: 'popular' | 'top-rated' | 'upcoming' | 'nowPlaying';
  title: string;
  viewMoreLink: string;
  limit?: number;
}

export const MoviesList = ({
  category,
  title,
  viewMoreLink,
  limit = 6,
}: MoviesListProps) => {
  const getQueryHook = () => {
    if (USE_MOCK) {
      switch (category) {
        case 'popular':
          return useMockPopularMovies;
        case 'top-rated':
          return useMockTopRatedMovies;
        case 'upcoming':
          return useMockUpcomingMovies;
        case 'nowPlaying':
          return useMockNowPlayingMovies;
        default:
          return useMockPopularMovies;
      }
    } else {
      switch (category) {
        case 'popular':
          return useGetPopularMoviesQuery;
        case 'top-rated':
          return useGetTopRatedMoviesQuery;
        case 'upcoming':
          return useGetUpcomingMoviesQuery;
        case 'nowPlaying':
          return useGetNowPlayingMoviesQuery;
        default:
          return useGetPopularMoviesQuery;
      }
    }
  };

  const useMoviesQuery = getQueryHook();
  const { data, isLoading, error } = useMoviesQuery();

  if (isLoading) {
    return (
      <MovieRow title={title} viewMoreLink={viewMoreLink}>
        <div>Loading...</div>
      </MovieRow>
    );
  }

  if (error) {
    console.error('Error loading movies:', error);
    return (
      <MovieRow title={title} viewMoreLink={viewMoreLink}>
        <div>Error loading movies</div>
      </MovieRow>
    );
  }

  const movies = data?.results?.slice(0, limit) || [];

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