import styles from './MovieList.module.css';
import { Link } from 'react-router-dom';

export default function MovieList({ movies, location }) {
  return (
    <ul className={styles.movieList}>
      {movies.map((movie) => {
        return (
          <li key={movie.id} className={styles.movieItem}>
            <Link
              to={`${movie.id}`}
              className={styles.movieLink}
              state={location}
            >
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
