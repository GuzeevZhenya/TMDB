export type SortOption = 'popularity.desc' | 'popularity.asc' | 'rating.desc' | 'rating.asc' | 'release.desc' | 'release.asc';

export interface Genre {
  id: number;
  name: string;
}

export interface FilterState {
  selectedGenres: number[];
  sortBy: SortOption;
  ratingRange: [number, number];
}

export interface FilterActions {
  handleGenreToggle: (genreId: number) => void;
  handleSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleRatingChange: (min: number, max: number) => void;
  resetFilters: () => void;
}