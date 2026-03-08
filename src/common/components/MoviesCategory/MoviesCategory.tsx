import { useParams } from 'react-router-dom';
import { MovieCard } from '../../../feature/main/ui/MovieCard/MovieCard';
import { mockMovies } from '../../mock/movies';
import styles from './MoviesCategory.module.css';

const categoryConfig = {
  'popular': { title: 'Popular Movies', data: mockMovies.popular },
  'top-rated': { title: 'Top Rated Movies', data: mockMovies.topRated },
  'upcoming': { title: 'Upcoming Movies', data: mockMovies.upcoming },
  'now-playing': { title: 'Now Playing Movies', data: mockMovies.nowPlaying },
};

export const MoviesCategory = () => {
  const { moviesCategoryFilter } = useParams();
  const config = categoryConfig[moviesCategoryFilter as keyof typeof categoryConfig];

  console.log(moviesCategoryFilter);


  if (!config) {
    return <div className={styles.error}>Category not found</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.categoryTitle}>{config.title}</h2>
      <div className={styles.moviesGrid}>
        {config.data.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            voteAverage={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
};