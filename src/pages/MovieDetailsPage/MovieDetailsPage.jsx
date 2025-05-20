import styles from './MovieDetailsPage.module.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../tmdi-api';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const movie = await fetchMovieDetails(movieId);
        setMovie(movie);
      } catch {
        setError(true);
      }
    }
    fetchData();
  }, [movieId]);

  if (error) return <ErrorMessage />;
  if (movie)
    return (
      <main>
        <Link to="/" className={styles.backLink}>
          Go back
        </Link>
        <div className={styles.movieDetailsContainer}>
          <img
            className={styles.moviePoster}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="Movie poster"
            width={250}
            height={400}
          />
          <div className={styles.movieInfo}>
            <h1>{movie.title}</h1>
            <p>User score: {movie.vote_average}</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <ul>
              {movie.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.additionalInfoContainer}>
          <p className={styles.additionalInfo}>Additional information:</p>
          <ul>
            <li>
              <Link to={`cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`reviews`}>Reviews</Link>
            </li>
            <Outlet />
          </ul>
        </div>
      </main>
    );
}
