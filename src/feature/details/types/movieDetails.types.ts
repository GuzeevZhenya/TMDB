import type { MovieDetails } from '@/common/mock/movieDetails';

export interface UseFavoriteProps {
  movieId: number;
}

export interface UseFavoriteReturn {
  isFavorite: boolean;
  handleFavoriteClick: () => void;
}

export interface MovieInfoProps {
  movie: MovieDetails;
  posterUrl: string;
  isFavorite?: boolean;
  onFavoriteClick?: () => void;
}

export interface MovieMetadataProps {
  releaseYear: string | number;
  voteAverage: string;
  runtime: string;
}

export interface MovieGenresProps {
  genres: Array<{ id: number; name: string }>;
  onGenreClick?: (genreId: number, genreName: string) => void;  
}

export interface MovieProductionProps {
  companies: Array<{ id: number; name: string }>;
}

export interface BackButtonProps {
  onClick: () => void;
}

export interface FavoriteButtonProps {
  isFavorite: boolean;
  onClick: () => void;
}