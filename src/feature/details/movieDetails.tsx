// pages/MovieDetails/MovieDetails.tsx
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './movieDetails.module.css';
import { FAVORITES_KEY } from '@/common/constants/LocalStorage/favouritesKeys';
import { getMovieById } from '@/common/mock/movieDetails';

export const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  const movieId = Number(id);
  const movie = getMovieById(movieId);

  useEffect(() => {
    if (!movie) return;

    const favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]');
    setIsFavorite(favorites.includes(movieId));
  }, [movieId]);

  const handleFavoriteClick = () => {
    const favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]');

    let newFavorites;
    if (isFavorite) {
      newFavorites = favorites.filter((favId: number) => favId !== movieId);
    } else {
      newFavorites = [...favorites, movieId];
    }

    localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  if (!movie) {
    return (
      <div className={styles.notFound}>
        <h2>Movie not found</h2>
        <button onClick={() => navigate(-1)} className={styles.backButton}>
          Go Back
        </button>
      </div>
    );
  }

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Poster';

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : '';

  const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';
  const runtime = movie.runtime ? `${Math.floor(movie.runtime / 60)}h${movie.runtime % 60}m` : 'N/A';
  const voteAverage = movie.vote_average?.toFixed(1) || 'N/A';

  return (
    <div className={styles.container}>
      {backdropUrl && (
        <div
          className={styles.backdrop}
          style={{ backgroundImage: `url(${backdropUrl})` }}
        />
      )}

      <div className={styles.content}>
        <button onClick={() => navigate(-1)} className={styles.backButton}>
          ← Back
        </button>

        <div className={styles.mainInfo}>
          <div className={styles.posterContainer}>
            <img src={posterUrl} alt={movie.title} className={styles.poster} />
          </div>

          <div className={styles.info}>
            <h1 className={styles.title}>{movie.title}</h1>

            {movie.tagline && <p className={styles.tagline}>"{movie.tagline}"</p>}

            <div className={styles.metadata}>
              {releaseYear !== 'N/A' && <span className={styles.year}>{releaseYear}</span>}
              <span className={styles.rating}>★ {voteAverage}</span>
              {runtime !== 'N/A' && <span className={styles.runtime}>{runtime}</span>}
            </div>

            <button
              className={`${styles.favoriteButton} ${isFavorite ? styles.favoriteActive : ''}`}
              onClick={handleFavoriteClick}
            >
              ♥ {isFavorite ? 'In Favorites' : 'Add to Favorites'}
            </button>

            {movie.overview && (
              <div className={styles.overview}>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
              </div>
            )}

            {movie.genres && movie.genres.length > 0 && (
              <div className={styles.genres}>
                <h3>Genres</h3>
                <div className={styles.genreList}>
                  {movie.genres.map(genre => (
                    <span key={genre.id} className={styles.genre}>
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {movie.production_companies && movie.production_companies.length > 0 && (
              <div className={styles.production}>
                <h3>Production</h3>
                <div className={styles.companyList}>
                  {movie.production_companies.slice(0, 3).map(company => (
                    <span key={company.id} className={styles.company}>
                      {company.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};