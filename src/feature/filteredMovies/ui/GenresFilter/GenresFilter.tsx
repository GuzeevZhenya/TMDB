// components/GenresFilter/GenresFilter.tsx
import styles from './GenresFilter.module.css';
import { GENRES } from '@/common/constants/GENRES/GENRES';

interface GenresFilterProps {
  selectedGenres: number[];
  onGenreToggle: (genreId: number) => void;
}

export const GenresFilter = ({ selectedGenres, onGenreToggle }: GenresFilterProps) => {
  return (
    <div className={styles.filterSection}>
      <div className={styles.genresList}>
        {GENRES.map(genre => (
          <label key={genre.id} className={styles.genreCheckbox}>
            <input
              type="checkbox"
              checked={selectedGenres.includes(genre.id)}
              onChange={() => onGenreToggle(genre.id)}
            />
            <span>{genre.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};