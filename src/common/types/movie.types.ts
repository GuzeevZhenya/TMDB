// common/types/movie.types.ts
export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  release_date: string;
  overview: string;
  genre_ids: number[]; // <- массив ID (для списков)
  popularity: number;
  adult?: boolean;
  original_language?: string;
  original_title?: string;
  video?: boolean;
  vote_count?: number;
}

export interface MovieDetails extends Movie {
  // Детальные поля (приходят из отдельного запроса)
  genres: Genre[]; // <- массив объектов (для детальной страницы)
  runtime: number | null;
  tagline: string | null;
  budget?: number;
  revenue?: number;
  status?: string;
  production_companies?: ProductionCompany[];
  production_countries?: ProductionCountry[];
  spoken_languages?: SpokenLanguage[];
}

export interface Genre {
  id: number;
  name: string;
}