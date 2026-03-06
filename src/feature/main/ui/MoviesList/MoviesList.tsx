import { MovieCard } from '../MovieCard/MovieCard';
import { MovieRow } from '../MovieRow/MovieRow';
import { mockMovies } from '../../../../common/mock/movies';

interface MoviesListProps {
  category: 'popular' | 'topRated' | 'upcoming' | 'nowPlaying';
  title: string;
  viewMoreLink: string;
  limit?: number;
}

export const MoviesList = ({ category, title, viewMoreLink, limit = 6 }: MoviesListProps) => {
  const movies = mockMovies[category]?.slice(0, limit) || [];

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