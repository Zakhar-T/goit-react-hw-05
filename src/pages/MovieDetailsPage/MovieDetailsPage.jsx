import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../tmdi-api';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await fetchMovieDetails(movieId);
        console.log(resp);
        setMovie(resp);
      } catch {
        return <ErrorMessage />;
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <main>
      <Link to="/">Go back</Link>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="Movie poster"
          width={350}
          height={500}
        />
        <div>
          <h1>{movie.title}</h1>
          <p>User score: {movie.vote_average}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <ul>
            {movie.genres.map((genre) => {
              return <li key={genre.id}>{genre.name}</li>;
            })}
          </ul>
        </div>
      </div>
      <p>Additional information</p>
      <Link>Cast</Link>
      <Link>Reviews</Link>
    </main>
  );
}
