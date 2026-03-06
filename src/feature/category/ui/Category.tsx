import { NavLink, Outlet } from 'react-router-dom';
import styles from './Category.module.css';
import { categoryPaths } from '../../../common/constants/paths';

export const Category = () => {
  const categories = [
    { id: 1, name: 'Popular Movies', path: categoryPaths.popular, filter: 'popular', },
    { id: 2, name: 'Top Rated Movies', path: categoryPaths.topRated, filter: 'top-rated', },
    { id: 3, name: 'Upcoming Movies', path: categoryPaths.upcoming, filter: 'upcoming', },
    { id: 4, name: 'Now Playing Movies', path: categoryPaths.nowPlaying, filter: 'now-playing', },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.categoriesGrid}>
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={category.path}
            className={({ isActive }) =>
              `${styles.categoryCard} ${isActive ? styles.active : ''}`
            }
          >
            <h2 className={styles.categoryName}>{category.name}</h2>
          </NavLink>
        ))}
      </div>

      {/* Здесь будут отображаться фильмы выбранной категории */}
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};