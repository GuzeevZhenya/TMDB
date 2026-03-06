import { MoviesList } from '../MoviesList/MoviesList';
import { WelcomeSection } from '../WelcomeSection/WelcomeSection';
import { categoryPaths } from '../../../../common/constants/paths';
import styles from './MainPage.module.css';

export const MainPage = () => {
  return (
    <div className={styles.container}>
      <WelcomeSection />

      <section className={styles.section}>
        <MoviesList
          category="popular"
          title="Popular Movies"
          viewMoreLink={categoryPaths.popular}
        />
      </section>

      <section className={styles.section}>
        <MoviesList
          category="topRated"
          title="Top Rated Movies"
          viewMoreLink={categoryPaths.topRated}
        />
      </section>

      <section className={styles.section}>
        <MoviesList
          category="upcoming"
          title="Upcoming Movies"
          viewMoreLink={categoryPaths.upcoming}
        />
      </section>

      <section className={styles.section}>
        <MoviesList
          category="nowPlaying"
          title="Now Playing Movies"
          viewMoreLink={categoryPaths.nowPlaying}
        />
      </section>
    </div>
  );
};