import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>© {currentYear} Kinopoisk Demo · Data courtesy of TMDB</p>
      </div>
    </footer>
  );
};