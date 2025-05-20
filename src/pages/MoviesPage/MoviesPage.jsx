import { useState } from 'react';
import { fetchMovies } from '../../tmdi-api';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { Link } from 'react-router-dom';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    fetchData(e.target.elements.movieSearch.value);
    e.target.reset();
  }

  async function fetchData(searchQuery) {
    try {
      setLoading(true);
      const movies = await fetchMovies(searchQuery);
      setMovies(movies);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <p>Loading data, please wait...</p>;
  if (error) return <ErrorMessage />;
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="movieSearch">Search for movies: </label>
        <input type="text" name="movieSearch" />
        <button type="submit">Search</button>
      </form>
      {movies && <p>There are no movies matching your query</p>}
      {movies.length > 0 && (
        <ul>
          {movies.map((movie) => {
            return (
              <li key={movie.id}>
                <Link to={`${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
