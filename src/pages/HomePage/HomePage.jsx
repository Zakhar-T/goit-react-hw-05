import styles from './HomePage.module.css';
import { Link } from 'react-router-dom';

export default function HomePage({ trendingMovies }) {
  return (
    <ul className={styles.moviesList}>
      {trendingMovies.map((movie) => {
        return (
          <li key={movie.id}>
            <Link>{movie.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
