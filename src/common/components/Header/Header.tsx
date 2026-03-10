import { NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import { toggleTheme } from '@/feature/theme/themeSlice';
import { Path } from '@/common/constants/paths';
import { useAppDispatch, useAppSelector } from '@/app/model/store';
import { Logo } from './Logo/Logo';

const Header = () => {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector((state) => state.theme.mode);
  const location = useLocation();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const isCategoryActive = location.pathname.startsWith('/movies/') &&
    !location.pathname.match(/^\/movies\/\d+$/);

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
    return `${styles.link} ${isActive ? styles.linkActive : ''}`;
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to={Path.Main} className={styles.logoLink} aria-label="Go to TMDB home">
          <Logo />
        </NavLink>

        <nav className={styles.nav}>
          <NavLink to={Path.Main} className={getNavLinkClass} end>
            Main
          </NavLink>
          <span className={styles.separator}>|</span>

          <NavLink
            to="/movies/popular"
            className={`${styles.link} ${isCategoryActive ? styles.linkActive : ''}`}
          >
            Category movies
          </NavLink>
          <span className={styles.separator}>|</span>

          <NavLink to={Path.FilteredMovies} className={getNavLinkClass}>
            Filtered movies
          </NavLink>
          <span className={styles.separator}>|</span>

          <NavLink to={Path.Search} className={getNavLinkClass}>
            Search
          </NavLink>
          <span className={styles.separator}>|</span>

          <NavLink to={Path.Favorites} className={getNavLinkClass}>
            Favorites
          </NavLink>
        </nav>

        <button
          onClick={handleThemeToggle}
          className={styles.themeButton}
          aria-label={`Переключить на ${themeMode === 'light' ? 'темную' : 'светлую'} тему`}
          title={`Переключить на ${themeMode === 'light' ? 'темную' : 'светлую'} тему`}
        >
          {themeMode === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
};

export default Header;