export const categoryPaths = {
  popular: '/movies/popular',
  topRated: '/movies/top-rated',
  upcoming: '/movies/upcoming',
  nowPlaying: '/movies/now-playing',
} as const

export const Path = {
  Main: '/',
  CategoryMovies: '/movies/popular',
  FilteredMovies: '/filteredMovies',
  Search: '/search',
  Favorites: '/favorites',
  CategoryBase: '/movies', 
  NotFound: '*',
  CategoryMoviesFilter: '/movies/:moviesCategoryFilter',
  MovieDetails: '/movie/:id',
} as const 