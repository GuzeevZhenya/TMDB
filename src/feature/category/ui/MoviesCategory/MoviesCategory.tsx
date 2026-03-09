import { useParams } from 'react-router-dom';
import styles from './MoviesCategory.module.css';
import { useEffect } from 'react';
import { mockMovies } from '@/common/mock/movies';
import { usePagination } from '@/common/hooks/usePagination';
import { MovieCard } from '@/feature/main/ui/MovieCard/MovieCard';
import { Pagination } from '@/common/components/Pagination/Pagination';

const categoryConfig = {
  'popular': { title: 'Popular Movies', data: mockMovies.popular },
  'top-rated': { title: 'Top Rated Movies', data: mockMovies.topRated },
  'upcoming': { title: 'Upcoming Movies', data: mockMovies.upcoming },
  'now-playing': { title: 'Now Playing Movies', data: mockMovies.nowPlaying },
};

export const MoviesCategory = () => {
  const { moviesCategoryFilter } = useParams();
  const config = categoryConfig[moviesCategoryFilter as keyof typeof categoryConfig];

  const { currentPage, setCurrentPage, pageSize, setPageSize } = usePagination({
    initialPage: 1,
    initialPageSize: 8
  });

  console.log('Current category:', moviesCategoryFilter);

  useEffect(() => {
    setCurrentPage(1);
  }, [moviesCategoryFilter, setCurrentPage]);

  if (!config) {
    return <div className={styles.error}>Category not found</div>;
  }

  const totalCount = config.data.length;
  const pagesCount = Math.ceil(totalCount / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const currentMovies = config.data.slice(startIndex, startIndex + pageSize);


  return (
    <div className={styles.container}>
      <h2 className={styles.categoryTitle}>{config.title}</h2>

      <p className={styles.count}>
        Найдено фильмов: {totalCount}
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
        changePageSize={setPageSize}
      />
    </div>
  );
};