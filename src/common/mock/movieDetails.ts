import { ALL_MOVIES } from '../constants/AllMovies/allMovies';
import { mockMovies } from './movies';

// Интерфейсы для типизации
export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface MovieDetails {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  overview: string;
  runtime: number; // обязательное
  genres: Genre[]; // обязательное
  tagline: string; // обязательное
  budget?: number;
  revenue?: number;
  status?: string;
  production_companies?: ProductionCompany[];
  production_countries?: Array<{ iso_3166_1: string; name: string }>;
  spoken_languages?: Array<{ english_name: string; iso_639_1: string; name: string }>;
}

 type MockMovie = {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  overview: string;
};

// Значения по умолчанию
const DEFAULT_GENRES: Genre[] = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 878, name: 'Science Fiction' },
];

const DEFAULT_RUNTIME = 120;
const DEFAULT_TAGLINE = 'No tagline available';

 const detailedMovies: Record<number, Partial<MovieDetails>> = {
  550: {
    budget: 63000000,
    revenue: 100853753,
    status: "Released",
    runtime: 139,
    tagline: "Mischief. Mayhem. Soap.",
    genres: [
      { id: 18, name: "Drama" },
      { id: 53, name: "Thriller" },
      { id: 35, name: "Comedy" }
    ],
    production_companies: [
      { id: 508, logo_path: "/7cxRWzi4LsVm4Utfpr1hfARNurT.png", name: "Regency Enterprises", origin_country: "US" },
      { id: 711, logo_path: "/tEiIH5QesdheJmDAqQwvtN60727.png", name: "Fox 2000 Pictures", origin_country: "US" },
      { id: 20555, logo_path: "/hD8yEGUBlHOcfHYbujp71vD8gZp.png", name: "Taurus Film", origin_country: "DE" }
    ],
    production_countries: [
      { iso_3166_1: "US", name: "United States of America" }
    ],
    spoken_languages: [
      { english_name: "English", iso_639_1: "en", name: "English" }
    ]
  },
  106: { 
    budget: 63000000,
    revenue: 100853753,
    status: "Released",
    runtime: 139,
    tagline: "Mischief. Mayhem. Soap.",
    genres: [
      { id: 18, name: "Drama" },
      { id: 53, name: "Thriller" }
    ]
  },
  1: {
    budget: 165000000,
    revenue: 400000000,
    status: "Released",
    runtime: 166,
    tagline: "Long Live the Fighters",
    genres: [
      { id: 878, name: "Science Fiction" },
      { id: 12, name: "Adventure" },
      { id: 18, name: "Drama" }
    ],
    production_companies: [
      { id: 923, logo_path: "/8M99ZcFiqAmeJ4B0v68uBP4w1yH.png", name: "Legendary Pictures", origin_country: "US" }
    ]
  },
  2: {
    runtime: 115,
    tagline: "Two legends. One destiny.",
    genres: [
      { id: 28, name: "Action" },
      { id: 878, name: "Science Fiction" },
      { id: 12, name: "Adventure" }
    ]
  },
  3: {
    runtime: 157,
    tagline: "The devil comes to Moscow",
    genres: [
      { id: 18, name: "Drama" },
      { id: 14, name: "Fantasy" },
      { id: 53, name: "Thriller" }
    ]
  },
  101: {
    runtime: 142,
    tagline: "Fear can hold you prisoner. Hope can set you free.",
    genres: [
      { id: 18, name: "Drama" }
    ]
  },
  102: {
    runtime: 175,
    tagline: "An offer you can't refuse.",
    genres: [
      { id: 18, name: "Drama" },
      { id: 80, name: "Crime" }
    ]
  },
  103: {
    runtime: 152,
    tagline: "Why so serious?",
    genres: [
      { id: 28, name: "Action" },
      { id: 80, name: "Crime" },
      { id: 18, name: "Drama" }
    ]
  },
  104: {
    runtime: 154,
    tagline: "You won't know the facts until you've seen the fiction.",
    genres: [
      { id: 53, name: "Thriller" },
      { id: 80, name: "Crime" }
    ]
  },
  105: {
    runtime: 201,
    tagline: "There can be no triumph without loss.",
    genres: [
      { id: 12, name: "Adventure" },
      { id: 14, name: "Fantasy" },
      { id: 28, name: "Action" }
    ]
  },
};

export const getMovieById = (id: number): MovieDetails | null => {
  //  const allMovies: MockMovie[] = [
  //   ...mockMovies.popular,
  //   ...mockMovies.topRated,
  //   ...mockMovies.upcoming,
  //   ...mockMovies.nowPlaying,
  // ];
  
  const baseMovie = ALL_MOVIES.find(m => m.id === id);
  
  if (!baseMovie) return null;
  
   const detailed = detailedMovies[id];
  
   const movieDetails: MovieDetails = {
    ...baseMovie,
    runtime: detailed?.runtime ?? DEFAULT_RUNTIME,
    genres: detailed?.genres ?? DEFAULT_GENRES,
    tagline: detailed?.tagline ?? DEFAULT_TAGLINE,
    budget: detailed?.budget,
    revenue: detailed?.revenue,
    status: detailed?.status,
    production_companies: detailed?.production_companies,
    production_countries: detailed?.production_countries,
    spoken_languages: detailed?.spoken_languages,
  };
  
  return movieDetails;
};