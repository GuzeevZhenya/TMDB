import styles from './SortFilter.module.css';

interface SortFilterProps {
  sortBy: string;
  onSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SortFilter = ({ sortBy, onSortChange }: SortFilterProps) => {
  return (
    <div className={styles.filterSection}>
      <select
        className={styles.sortSelect}
        value={sortBy}
        onChange={onSortChange}
      >
        <option value="popularity.desc">Popularity ↓</option>
        <option value="popularity.asc">Popularity ↑</option>
        <option value="rating.desc">Rating ↓</option>
        <option value="rating.asc">Rating ↑</option>
        <option value="release.desc">Release Date ↓</option>
        <option value="release.asc">Release Date ↑</option>
      </select>
    </div>
  );
};