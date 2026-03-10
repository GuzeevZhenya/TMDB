import type { BackButtonProps } from '@/feature/details/types/movieDetails.types';
import styles from './BackButton.module.css';

export const BackButton = ({ onClick }: BackButtonProps) => {
  return (
    <button onClick={onClick} className={styles.backButton}>
      ← Back
    </button>
  );
};