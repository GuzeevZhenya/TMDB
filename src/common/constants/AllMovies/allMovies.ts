import { mockMovies } from "../../mock/movies";

export const ALL_MOVIES = [
  ...mockMovies.popular,
  ...mockMovies.topRated,
  ...mockMovies.upcoming,
  ...mockMovies.nowPlaying,
];