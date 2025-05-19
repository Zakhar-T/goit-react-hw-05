import styles from './AppHeader.module.css';
import { NavLink } from 'react-router-dom';

export default function AppHeader() {
  return (
    <header className={styles.hdr}>
      <ul className={styles.hdrNavList}>
        <li className={styles.hdrNavItem}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={styles.hdrNavItem}>
          <NavLink to="/movies">Search movies</NavLink>
        </li>
      </ul>
    </header>
  );
}
