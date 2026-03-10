import { useParams, useNavigate } from 'react-router-dom';
import styles from './movieDetails.module.css';
import { getMovieById } from '@/common/mock/movieDetails';
import { useFavorite } from '@/common/hooks/useFavourite';
import { BackButton } from '@/common/components/BackButton/BackButton';
import { MovieInfo } from './ui/MovieInfo/MovieInfo';

export const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const movieId = Number(id);
  const movie = getMovieById(movieId);
  const { isFavorite, handleFavoriteClick } = useFavorite({ movieId });

  if (!movie) {
    return (
      <div className={styles.notFound}>
        <h2>Movie not found</h2>
        <button onClick={() => navigate(-1)} className={styles.backButton}>
          Go Back
        </button>
      </div>
    );
  }

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Poster';

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : '';

  return (
    <div className={styles.container}>
      {backdropUrl && (
        <div
          className={styles.backdrop}
          style={{ backgroundImage: `url(${backdropUrl})` }}
        />
      )}

      <div className={styles.content}>
        <BackButton onClick={() => navigate(-1)} />

        <MovieInfo
          movie={movie}
          posterUrl={posterUrl}
          isFavorite={isFavorite}
          onFavoriteClick={handleFavoriteClick}
        />
      </div>
    </div>
  );
};