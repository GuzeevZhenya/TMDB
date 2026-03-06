import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MovieRow.module.css';

interface MovieRowProps {
  title: string;
  viewMoreLink: string;
  children: React.ReactNode;
}

export const MovieRow = ({ title, viewMoreLink, children }: MovieRowProps) => {
  return (
    <div className={styles.movieRow}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <Link to={viewMoreLink} className={styles.viewMore}>
          View more
        </Link>
      </div>
      <div className={styles.grid}>
        {children}
      </div>
    </div>
  );
};