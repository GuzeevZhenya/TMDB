import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './MovieCard.module.css';

interface MovieCardProps {
  id: number;
  title: string;
  posterPath: string | null;
  voteAverage: number;
}

export const MovieCard = ({ id, title, posterPath, voteAverage }: MovieCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const posterUrl = posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : 'https://via.placeholder.com/500x750?text=No+Poster';

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    console.log(`${title} ${isFavorite ? 'удален из' : 'добавлен в'} избранное`);
  };

  return (
    <div className={styles.cardWrapper}>
      <Link to={`/movie/${id}`} className={styles.cardLink}>
        <div className={styles.card}>
          <div className={styles.posterContainer}>
            <img src={posterUrl} alt={title} className={styles.poster} />
            <div className={styles.rating}>
              ★ {voteAverage.toFixed(1)}
            </div>
            <button
              className={`${styles.favoriteButton} ${isFavorite ? styles.favoriteActive : ''}`}
              onClick={handleFavoriteClick}
              aria-label={isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
            >
              ♥
            </button>
          </div>
          <div className={styles.titleContainer}>
            <h3 className={styles.title}>{title}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};