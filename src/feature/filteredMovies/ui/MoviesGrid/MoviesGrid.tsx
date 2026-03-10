// components/MoviesGrid/MoviesGrid.tsx
import { Pagination } from '@/common/components/Pagination/Pagination';
import styles from './MoviesGrid.module.css';
import { MovieCard } from '@/feature/main/ui/MovieCard/MovieCard';

interface MoviesGridProps {
  movies: any[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
  pageSize: number;
  onPageSizeChange: (size: number) => void; // переименовали для ясности
  pagesCount: number;
  totalCount: number;
}

export const MoviesGrid = ({
  movies,
  currentPage,
  setCurrentPage,
  pageSize,
  onPageSizeChange, // теперь принимаем функцию, которая уже сбрасывает страницу
  pagesCount,
  totalCount
}: MoviesGridProps) => {
  return (
    <>
      <p className={styles.count}>
        Found {totalCount} movies
        {pagesCount > 0 && ` (page ${currentPage} of ${pagesCount})`}
      </p>

      {movies.length > 0 ? (
        <>
          <div className={styles.moviesGrid}>
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                posterPath={movie.poster_path}
                voteAverage={movie.vote_average}
              />
            ))}
          </div>

          {pagesCount > 1 && (
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              pagesCount={pagesCount}
              pageSize={pageSize}
              changePageSize={onPageSizeChange} // используем переданную функцию
            />
          )}
        </>
      ) : (
        <p className={styles.noResults}>No movies found with current filters</p>
      )}
    </>
  );
};