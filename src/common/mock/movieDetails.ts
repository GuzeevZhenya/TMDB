import { mockMovies } from './movies';

export const getMovieDetails = (id: number) => {
  const allMovies = [
    ...mockMovies.popular,
    ...mockMovies.topRated,
    ...mockMovies.upcoming,
    ...mockMovies.nowPlaying,
  ];
  
  const movie = allMovies.find(m => m.id === id);
  
  if (!movie) return null;
  
  return {
    ...movie,
    genres: [
      { id: 28, name: 'Action' },
      { id: 12, name: 'Adventure' },
      { id: 878, name: 'Science Fiction' },
    ],
    runtime: 148,
    budget: 165000000,
    revenue: 400000000,
    status: 'Released',
    tagline: 'Great movie tagline',
  };
};


// common/mock/movieDetails.ts
export const movieDetailsMock = {
  "550": {
    "adult": false,
    "backdrop_path": "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
    "belongs_to_collection": null,
    "budget": 63000000,
    "genres": [
      { "id": 18, "name": "Drama" },
      { "id": 53, "name": "Thriller" },
      { "id": 35, "name": "Comedy" }
    ],
    "homepage": "http://www.foxmovies.com/movies/fight-club",
    "id": 550,
    "imdb_id": "tt0137523",
    "original_language": "en",
    "original_title": "Fight Club",
    "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
    "popularity": 61.416,
    "poster_path": "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    "production_companies": [
      { "id": 508, "logo_path": "/7cxRWzi4LsVm4Utfpr1hfARNurT.png", "name": "Regency Enterprises", "origin_country": "US" },
      { "id": 711, "logo_path": "/tEiIH5QesdheJmDAqQwvtN60727.png", "name": "Fox 2000 Pictures", "origin_country": "US" },
      { "id": 20555, "logo_path": "/hD8yEGUBlHOcfHYbujp71vD8gZp.png", "name": "Taurus Film", "origin_country": "DE" }
    ],
    "production_countries": [
      { "iso_3166_1": "US", "name": "United States of America" }
    ],
    "release_date": "1999-10-15",
    "revenue": 100853753,
    "runtime": 139,
    "spoken_languages": [
      { "english_name": "English", "iso_639_1": "en", "name": "English" }
    ],
    "status": "Released",
    "tagline": "Mischief. Mayhem. Soap.",
    "title": "Fight Club",
    "video": false,
    "vote_average": 8.433,
    "vote_count": 26280
  },
  "1": {
    "id": 1,
    "title": "Дюна: Часть вторая",
    "poster_path": "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    "backdrop_path": "/xqmldAUa8g1Z9H9WpJx8yRqRQzF.jpg",
    "vote_average": 8.5,
    "release_date": "2024-03-07",
    "overview": "Пол Атрейдес объединяется с Чани и фрименами, чтобы отомстить заговорщикам, уничтожившим его семью.",
    "runtime": 166,
    "genres": [
      { "id": 878, "name": "Science Fiction" },
      { "id": 12, "name": "Adventure" },
      { "id": 18, "name": "Drama" }
    ],
    "tagline": "Long Live the Fighters"
  },
  // Добавьте остальные фильмы из mockMovies...
};

// Функция для получения деталей фильма по ID
export const getMovieById = (id: number) => {
  return movieDetailsMock[id as keyof typeof movieDetailsMock] || null;
};