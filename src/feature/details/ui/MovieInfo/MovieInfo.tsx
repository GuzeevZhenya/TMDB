import styles from './MovieInfo.module.css';
import { MovieMetadata } from '../MovieMetadata/MovieMetadata';
import { MovieGenres } from '../MovieGenres/MovieGenres';
import { MovieProduction } from '../MovieProduction/MovieProduction';
import type { MovieInfoProps } from '../../types/movieDetails.types';
import { FavoriteButton } from '../FavouriteButton/FavoriteButton';

export const MovieInfo = ({
  movie,
  posterUrl,
  isFavorite,
  onFavoriteClick
}: MovieInfoProps) => {
  const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';
  const runtime = movie.runtime ? `${Math.floor(movie.runtime / 60)}h${movie.runtime % 60}m` : 'N/A';
  const voteAverage = movie.vote_average?.toFixed(1) || 'N/A';

  return (
    <div className={styles.mainInfo}>
      <div className={styles.posterContainer}>
        <img src={posterUrl} alt={movie.title} className={styles.poster} />
      </div>

      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>

        {movie.tagline && <p className={styles.tagline}>"{movie.tagline}"</p>}

        <MovieMetadata
          releaseYear={releaseYear}
          voteAverage={voteAverage}
          runtime={runtime}
        />

        {onFavoriteClick && (
          <FavoriteButton
            isFavorite={isFavorite || false}
            onClick={onFavoriteClick}
          />
        )}

        {movie.overview && (
          <div className={styles.overview}>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>
        )}

        <MovieGenres genres={movie.genres} />
        <MovieProduction companies={movie.production_companies || []} />
      </div>
    </div>
  );
};