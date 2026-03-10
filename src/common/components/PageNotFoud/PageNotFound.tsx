import { Link } from 'react-router-dom';
import styles from './PageNotFound.module.css';
import { mockMovies } from '@/common/mock/movies';
import { Path } from '@/common/constants/paths';

export const PageNotFound = () => {
  const recommendations = mockMovies.popular.slice(0, 3);

  return (
    <div className={styles.container}>
      <div className={styles.ticket}>
        <div className={styles.ticketHole}></div>
        <div className={styles.ticketHole}></div>

        <div className={styles.ticketContent}>
          <div className={styles.movieTitle}>404</div>
          <div className={styles.movieInfo}>
            <span>⭐ NO MOVIE FOUND</span>
            <span>🎬 {new Date().getFullYear()}</span>
          </div>

          <div className={styles.movieMeta}>
            <span>Director: <strong>Your Browser</strong></span>
            <span>Duration: <strong>0 min</strong></span>
          </div>

          <div className={styles.movieDesc}>
            "The page you're looking for doesn't exist in our catalog.
            But we found some movies you might enjoy!"
          </div>

          <div className={styles.recommendations}>
            <h3 className={styles.recommendationsTitle}>You might also like:</h3>
            <div className={styles.recommendationsList}>
              {recommendations.map((movie) => (
                <Link
                  key={movie.id}
                  to={`/movie/${movie.id}`}
                  className={styles.recommendationItem}
                >
                  <span className={styles.recommendationTitle}>{movie.title}</span>
                  <span className={styles.recommendationRating}>★ {movie.vote_average}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.ticketFooter}>
            <span>ROW: 404</span>
            <span>SEAT: 00</span>
          </div>
        </div>

        <div className={styles.ticketStub}>
          <div className={styles.stubText}>404</div>
          <div className={styles.stubActions}>
            <Link to={Path.Main} className={styles.stubButton}>
              🏠 Main
            </Link>
            <Link to={Path.Search} className={styles.stubButton}>
              🔍 Search
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};