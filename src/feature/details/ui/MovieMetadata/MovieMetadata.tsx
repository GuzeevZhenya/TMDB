import type { MovieMetadataProps } from '../../types/movieDetails.types';
import styles from './MovieMetadata.module.css';

export const MovieMetadata = ({ releaseYear, voteAverage, runtime }: MovieMetadataProps) => {
  return (
    <div className={styles.metadata}>
      {releaseYear !== 'N/A' && <span className={styles.year}>{releaseYear}</span>}
      <span className={styles.rating}>★ {voteAverage}</span>
      {runtime !== 'N/A' && <span className={styles.runtime}>{runtime}</span>}
    </div>
  );
};