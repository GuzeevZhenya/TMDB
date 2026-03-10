import type { FavoriteButtonProps } from '@/feature/details/types/movieDetails.types';
import styles from './FavoriteButton.module.css';

export const FavoriteButton = ({ isFavorite, onClick }: FavoriteButtonProps) => {
  return (
    <button
      className={`${styles.favoriteButton} ${isFavorite ? styles.favoriteActive : ''}`}
      onClick={onClick}
    >
      ♥ {isFavorite ? 'In Favorites' : 'Add to Favorites'}
    </button>
  );
};