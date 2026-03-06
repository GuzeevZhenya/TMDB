import { mockMovies } from './movies';

export const searchMovies = (query: string) => {
  const allMovies = [
    ...mockMovies.popular,
    ...mockMovies.topRated,
    ...mockMovies.upcoming,
    ...mockMovies.nowPlaying,
  ];
  
  const results = allMovies.filter(movie => 
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
  
  return {
    page: 1,
    results,
    total_pages: 1,
    total_results: results.length,
  };
};