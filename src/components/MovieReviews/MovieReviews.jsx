import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../tmdi-api';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function MovieReviews() {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const reviews = await fetchMovieReviews(movieId);
        setMovieReviews(reviews);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  if (loading) return <p>Loading data, please wait...</p>;
  if (error) return <ErrorMessage />;
  if (movieReviews.length === 0)
    return <p>Sorry, there are no reviews yet...</p>;
  return (
    <ul>
      {movieReviews.map((review) => {
        return (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
}
