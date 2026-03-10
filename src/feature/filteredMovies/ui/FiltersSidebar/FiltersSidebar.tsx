// components/FiltersSidebar/FiltersSidebar.tsx
import styles from './FiltersSidebar.module.css';
import { RatingFilter } from '../RatingFilter/RatingFilter';
import { GenresFilter } from '../GenresFilter/GenresFilter';
import { ResetButton } from '../ResetButton/ResetButton';
import type { FilterActions, FilterState } from '@/common/types/filters.types';
import { SortFilter } from '../SortFilter/SortFilter';

type FiltersSidebarProps = FilterState & FilterActions;

export const FiltersSidebar = ({
  selectedGenres,
  sortBy,
  ratingRange,
  handleGenreToggle,
  handleSortChange,
  handleRatingChange,
  resetFilters
}: FiltersSidebarProps) => {
  return (
    <aside className={styles.filtersSidebar}>
      <h2 className={styles.filtersTitle}>Filters / Sort</h2>
      <SortFilter sortBy={sortBy} onSortChange={handleSortChange} />
      <RatingFilter ratingRange={ratingRange} onRatingChange={handleRatingChange} />
      <GenresFilter selectedGenres={selectedGenres} onGenreToggle={handleGenreToggle} />
      <ResetButton onReset={resetFilters} />
    </aside>
  );
};