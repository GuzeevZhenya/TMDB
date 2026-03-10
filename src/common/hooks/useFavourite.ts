import { useState, useEffect } from 'react';
import { FAVORITES_KEY } from '@/common/constants/LocalStorage/favouritesKeys';
import type { UseFavoriteProps, UseFavoriteReturn } from '@/feature/details/types/movieDetails.types';
 
export const useFavorite = ({ movieId }: UseFavoriteProps): UseFavoriteReturn => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]');
    setIsFavorite(favorites.includes(movieId));
  }, [movieId]);

  const handleFavoriteClick = () => {
    const favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]');

    let newFavorites;
    if (isFavorite) {
      newFavorites = favorites.filter((favId: number) => favId !== movieId);
    } else {
      newFavorites = [...favorites, movieId];
    }

    localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  return { isFavorite, handleFavoriteClick };
};