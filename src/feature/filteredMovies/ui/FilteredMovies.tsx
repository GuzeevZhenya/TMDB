// FilteredMovies.tsx
import { useFilters } from '@/common/hooks/useFilters';
import styles from './FilteredMovies.module.css';
import { usePagination } from '@/common/hooks/usePagination';
import { FiltersSidebar } from './FiltersSidebar/FiltersSidebar';
import { MoviesGrid } from './MoviesGrid/MoviesGrid';
import { useEffect } from 'react';

export const FilteredMovies = () => {
  const {
    selectedGenres,
    sortBy,
    ratingRange,
    filteredMovies,
    isLoading,
    handleGenreToggle,
    handleSortChange,
    handleRatingChange,
    resetFilters
  } = useFilters();

  const { currentPage, setCurrentPage, pageSize, changePageSize, validatePage } = usePagination({
    initialPage: 1,
    initialPageSize: 8,
    resetOnPageSizeChange: true
  });

  const totalCount = filteredMovies.length;
  const pagesCount = Math.ceil(totalCount / pageSize);

  // Валидация страницы
  useEffect(() => {
    validatePage(pagesCount);
  }, [currentPage, pagesCount, validatePage]);

  // Сброс на первую страницу при изменении фильтров
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedGenres, sortBy, ratingRange, setCurrentPage]);

  const startIndex = (currentPage - 1) * pageSize;
  const currentMovies = filteredMovies.slice(startIndex, startIndex + pageSize);

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>Loading movies...</p>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <FiltersSidebar
        selectedGenres={selectedGenres}
        sortBy={sortBy}
        ratingRange={ratingRange}
        handleGenreToggle={handleGenreToggle}
        handleSortChange={handleSortChange}
        handleRatingChange={handleRatingChange}
        resetFilters={resetFilters}
      />
      <main className={styles.mainContent}>
        <h2 className={styles.title}>
          {selectedGenres.length === 0
            ? 'All Movies'
            : `Filtered Movies (${selectedGenres.length} ${selectedGenres.length === 1 ? 'genre' : 'genres'})`}
        </h2>
        <MoviesGrid
          movies={currentMovies}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageSize={pageSize}
          onPageSizeChange={changePageSize} // передаем функцию, которая сбрасывает страницу
          pagesCount={pagesCount}
          totalCount={totalCount}
        />
      </main>
    </div>
  );
};