import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
 import { ALL_MOVIES } from '@/common/constants/AllMovies/allMovies';
import type { SortOption } from '../types/filters.types';

export const useFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>('popularity.desc');
  const [ratingRange, setRatingRange] = useState<[number, number]>([0, 10]);
  const [filteredMovies, setFilteredMovies] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
    const genreParam = searchParams.get('genres');
    const sortParam = searchParams.get('sort') as SortOption;
    const minRating = searchParams.get('minRating');
    const maxRating = searchParams.get('maxRating');

    if (genreParam) {
      setSelectedGenres(genreParam.split(',').map(Number));
    }
    if (sortParam && ['popularity.desc', 'popularity.asc', 'rating.desc', 'rating.asc', 'release.desc', 'release.asc'].includes(sortParam)) {
      setSortBy(sortParam);
    }
    if (minRating && maxRating) {
      setRatingRange([Number(minRating), Number(maxRating)]);
    }
    setIsLoading(false);
  }, [searchParams]);

   useEffect(() => {
    let movies = [...ALL_MOVIES];

    if (selectedGenres.length > 0) {
      movies = movies.filter(movie =>
        selectedGenres.some(genreId => movie.genre_ids?.includes(genreId))
      );
    }

    movies = movies.filter(movie =>
      movie.vote_average >= ratingRange[0] && movie.vote_average <= ratingRange[1]
    );

    movies.sort((a, b) => {
      switch (sortBy) {
        case 'popularity.desc':
          return (b.popularity || 0) - (a.popularity || 0);
        case 'popularity.asc':
          return (a.popularity || 0) - (b.popularity || 0);
        case 'rating.desc':
          return b.vote_average - a.vote_average;
        case 'rating.asc':
          return a.vote_average - b.vote_average;
        case 'release.desc':
          return new Date(b.release_date).getTime() - new Date(a.release_date).getTime();
        case 'release.asc':
          return new Date(a.release_date).getTime() - new Date(b.release_date).getTime();
        default:
          return 0;
      }
    });

    setFilteredMovies(movies);
  }, [selectedGenres, sortBy, ratingRange]);

  const updateFilters = (newGenres: number[], newSort?: SortOption, newRating?: [number, number]) => {
    const params = new URLSearchParams();

    if (newGenres.length > 0) {
      params.set('genres', newGenres.join(','));
    }
    if (newSort) {
      params.set('sort', newSort);
    }
    if (newRating) {
      params.set('minRating', newRating[0].toString());
      params.set('maxRating', newRating[1].toString());
    }

    setSearchParams(params);
  };

  const handleGenreToggle = (genreId: number) => {
    const newGenres = selectedGenres.includes(genreId)
      ? selectedGenres.filter(id => id !== genreId)
      : [...selectedGenres, genreId];

    setSelectedGenres(newGenres);
    updateFilters(newGenres, sortBy, ratingRange);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = e.target.value as SortOption;
    setSortBy(newSort);
    updateFilters(selectedGenres, newSort, ratingRange);
  };

  const handleRatingChange = (min: number, max: number) => {
    const newRating: [number, number] = [min, max];
    setRatingRange(newRating);
    updateFilters(selectedGenres, sortBy, newRating);
  };

  const resetFilters = () => {
    setSelectedGenres([]);
    setSortBy('popularity.desc');
    setRatingRange([0, 10]);
    setSearchParams({});
  };

  return {
    selectedGenres,
    sortBy,
    ratingRange,
    filteredMovies,
    isLoading,
    handleGenreToggle,
    handleSortChange,
    handleRatingChange,
    resetFilters
  };
};