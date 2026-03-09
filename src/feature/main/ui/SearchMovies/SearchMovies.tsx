import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styles from './SearchMovies.module.css';
import { useDebounceValue } from '@/common/hooks/useDebaunceValue';
import { ALL_MOVIES } from '@/common/constants/AllMovies/allMovies';
import { Path } from '@/common/constants/paths';
import { MovieCard } from '../MovieCard/MovieCard';

interface SearchProps {
  placeholder?: string;
  buttonText?: string;
  onSearch?: (query: string) => void;
  className?: string;
  showResults?: boolean;
  debounceDelay?: number;
}

export const SearchMovies = ({
  placeholder = "Search for a movie",
  buttonText = "Search",
  onSearch,
  className,
  showResults = true,
  debounceDelay = 700
}: SearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const debouncedQuery = useDebounceValue(searchQuery, debounceDelay);

  console.log('Search Query:', searchQuery);
  console.log('Debounced Query:', debouncedQuery);

  useEffect(() => {
    let isActive = true;

    const performSearch = async () => {
      if (!debouncedQuery.trim()) {
        setSearchResults([]);
        return;
      }

      setIsSearching(true);

      const results = ALL_MOVIES.filter(movie =>
        movie.title.toLowerCase().includes(debouncedQuery.toLowerCase())
      );

      if (isActive) {
        setSearchResults(results);
        setIsSearching(false);
      }
    };

    performSearch();

    return () => {
      isActive = false;
    };
  }, [debouncedQuery]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      if (onSearch) {
        onSearch(searchQuery.trim());
      } else {
        navigate(`${Path.Search}?query=${encodeURIComponent(searchQuery.trim())}`);
      }
    }
  };

  return (
    <div className={styles.searchWrapper}>
      <form
        onSubmit={handleSubmit}
        className={`${styles.searchContainer} ${className || ''}`}
      >
        <input
          type="text"
          placeholder={placeholder}
          className={styles.searchInput}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className={styles.searchButton}
          disabled={!searchQuery.trim() || isSearching}
        >
          {isSearching ? 'Searching...' : buttonText}
        </button>
      </form>

      {showResults && debouncedQuery.trim() && (
        <div className={styles.searchResults}>
          <h3 className={styles.resultsTitle}>
            Found {searchResults.length} movie{searchResults.length !== 1 ? 's' : ''}
          </h3>

          {isSearching ? (
            <div className={styles.loading}>Searching...</div>
          ) : (
            <div className={styles.moviesGrid}>
              {searchResults.map((movie) => (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  posterPath={movie.poster_path}
                  voteAverage={movie.vote_average}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};