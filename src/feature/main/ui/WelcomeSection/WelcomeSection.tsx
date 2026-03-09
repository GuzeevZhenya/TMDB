import { SearchMovies } from '../SearchMovies/SearchMovies';
import styles from './WelcomeSection.module.css';

export const WelcomeSection = () => {
  return (
    <div
      className={styles.welcomeSection}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(18, 18, 18, 1) 0%, rgba(4, 21, 45, 0) 79.17%), url(https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png)`
      }}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>WELCOME</h1>
        <p className={styles.subtitle}>Browse highlighted titles from TMDB</p>

        <SearchMovies />
      </div>
    </div>
  );
};