import { useNavigate } from 'react-router-dom';
import type { MovieGenresProps } from '../../types/movieDetails.types';
import styles from './MovieGenres.module.css';

export const MovieGenres = ({ genres, onGenreClick }: MovieGenresProps) => {
  const navigate = useNavigate();

  const handleGenreClick = (genreId: number, genreName: string) => {
    if (onGenreClick) {
      onGenreClick(genreId, genreName);
    } else {
      navigate(`/filteredMovies?genres=${genreId}`);
    }
  };

  if (!genres?.length) return null;

  return (
    <div className={styles.genres}>
      <h3>Genres</h3>
      <div className={styles.genreList}>
        {genres.map(genre => (
          <button
            key={genre.id}
            className={styles.genreButton}
            onClick={() => handleGenreClick(genre.id, genre.name)}
            aria-label={`Show ${genre.name} movies`}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
};