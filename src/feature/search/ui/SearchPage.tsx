import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './SearchPage.module.css';
import { Pagination } from '@/common/components/Pagination/Pagination';
import { usePagination } from '@/common/hooks/usePagination';
import { ALL_MOVIES } from '@/common/constants/AllMovies/allMovies';
import { SearchMovies } from '@/feature/main/ui/SearchMovies/SearchMovies';
import { MovieCard } from '@/feature/main/ui/MovieCard/MovieCard';

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const [filteredMovies, setFilteredMovies] = useState<any[]>([]);
  const [totalCount, setTotalCount] = useState(0);

  const { currentPage, setCurrentPage, pageSize, setPageSize } = usePagination({
    initialPage: 1,
    initialPageSize: 8
  });

  useEffect(() => {
    if (!query.trim()) {
      setFilteredMovies([]);
      setTotalCount(0);
      return;
    }

    const results = ALL_MOVIES.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );

    setTotalCount(results.length);

    const startIndex = (currentPage - 1) * pageSize;
    const paginatedResults = results.slice(startIndex, startIndex + pageSize);
    setFilteredMovies(paginatedResults);
  }, [query, currentPage, pageSize]);

  const pagesCount = Math.ceil(totalCount / pageSize);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Search Results {query && `for "${query}"`}</h1>

      <div className={styles.searchWrapper}>
        <SearchMovies
          placeholder="Search for a movie"
          buttonText="Search"
        />
      </div>

      {filteredMovies.length > 0 ? (
        <>
          <p className={styles.count}>Found {totalCount} movies</p>
          <div className={styles.moviesGrid}>
            {filteredMovies.map((movie) => (
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
              changePageSize={setPageSize}
            />
          )}
        </>
      ) : query ? (
        <p className={styles.noResults}>No movies found for "{query}"</p>
      ) : (
        <p className={styles.hint}>
          Enter a movie title to start searching.
        </p>
      )}
    </div>
  );
};