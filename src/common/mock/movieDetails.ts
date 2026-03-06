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