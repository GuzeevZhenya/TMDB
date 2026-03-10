import { useState, useEffect } from 'react';
import styles from './Favourites.module.css';
import { usePagination } from '@/common/hooks/usePagination';
import { ALL_MOVIES } from '@/common/constants/AllMovies/allMovies';
import { MovieCard } from '@/feature/main/ui/MovieCard/MovieCard';
import { Pagination } from '@/common/components/Pagination/Pagination';
import { FAVORITES_KEY } from '@/common/constants/LocalStorage/favouritesKeys';

export const Favourites = () => {
  const [favoriteMovies, setFavoriteMovies] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { currentPage, setCurrentPage, pageSize, changePageSize, validatePage } = usePagination({
    initialPage: 1,
    initialPageSize: 8,
    resetOnPageSizeChange: true
  });

  useEffect(() => {
    const loadFavorites = () => {
      try {
        const favoriteIds = JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]');
        const favorites = ALL_MOVIES.filter(movie => favoriteIds.includes(movie.id));
        setFavoriteMovies(favorites);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading favorites:', error);
        setIsLoading(false);
      }
    };

    loadFavorites();
  }, []);

  const totalCount = favoriteMovies.length;
  const pagesCount = Math.ceil(totalCount / pageSize);

  // Валидация страницы
  useEffect(() => {
    validatePage(pagesCount);
  }, [currentPage, pagesCount, validatePage]);

  const startIndex = (currentPage - 1) * pageSize;
  const currentMovies = favoriteMovies.slice(startIndex, startIndex + pageSize);

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>Загрузка избранного...</p>
      </div>
    );
  }

  if (favoriteMovies.length === 0) {
    return (
      <div className={styles.emptyState}>
        <h2 className={styles.title}>Избранное</h2>
        <p className={styles.emptyText}>У вас пока нет избранных фильмов</p>
        <p className={styles.hint}>
          Добавьте фильмы, нажимая на ♥ в карточке фильма
        </p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Избранные фильмы</h2>
      <p className={styles.count}>
        Найдено фильмов: {favoriteMovies.length}
        {pagesCount > 0 && ` (страница ${currentPage} из ${pagesCount})`}
      </p>

      <div className={styles.moviesGrid}>
        {currentMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            voteAverage={movie.vote_average}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pagesCount={pagesCount}
        pageSize={pageSize}
        changePageSize={changePageSize}
      />
    </div>
  );
};