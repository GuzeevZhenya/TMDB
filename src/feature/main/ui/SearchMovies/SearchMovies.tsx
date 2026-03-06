import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Path } from '../../../../common/constants/paths';
import styles from './SearchMovies.module.css';

interface SearchProps {
  placeholder?: string;
  buttonText?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export const SearchMovies = ({
  placeholder = "Search for a movie",
  buttonText = "Search",
  onSearch,
  className
}: SearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

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
        disabled={!searchQuery.trim()}
      >
        {buttonText}
      </button>
    </form>
  );
};