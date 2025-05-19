import styles from './HomePage.module.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../../tmdi-api';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const movies = await fetchTrendingMovies();
        return setTrendingMovies(movies);
      } catch {
        return <ErrorMessage />;
      }
    }
    fetchData();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <ul className={styles.moviesList}>
        {trendingMovies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
