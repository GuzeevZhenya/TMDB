import React from 'react';
import styles from './SearchPage.module.css';
import { SearchMovies } from '../../main/ui/SearchMovies/SearchMovies';

export const SearchPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Search Results</h1>

      <div className={styles.searchWrapper}>
        <SearchMovies
          placeholder="Search for a movie"
          buttonText="Search"
        />
      </div>

      <p className={styles.hint}>
        Enter a movie title to start searching.
      </p>
    </div>
  );
};