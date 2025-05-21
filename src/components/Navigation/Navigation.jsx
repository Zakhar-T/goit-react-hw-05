import clsx from 'clsx';
import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export default function AppHeader() {
  return (
    <header className={styles.hdr}>
      <ul className={styles.hdrNavList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return clsx(styles.hdrNavLink, isActive && styles.linkIsActive);
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={({ isActive }) => {
              return clsx(styles.hdrNavLink, isActive && styles.linkIsActive);
            }}
          >
            Search movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
