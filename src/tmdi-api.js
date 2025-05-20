import axios from 'axios';

const trendingUrl =
  'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
const detailsUrl = 'https://api.themoviedb.org/3/movie/';
const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTAzZGNlOWNiMzExMjA1OGJhZTY4YzY1NDJhZDAwNCIsIm5iZiI6MTc0NzU4NjAwNS4wMDcsInN1YiI6IjY4MmEwYmQ0ZTRiM2Y5OTlkZmUyNDg5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZiMHCJyBANa8gOytJzRf7JAiDVD-lVTB-_RUL-yWn8E',
    accept: 'application/json',
  },
};

export async function fetchTrendingMovies() {
  const resp = await axios.get(trendingUrl, options);
  return resp.data.results;
}

export async function fetchMovieDetails(movieId) {
  const resp = await axios.get(
    `${detailsUrl + movieId}?language=en-US`,
    options,
  );
  return resp.data;
}

export async function fetchMovieCast(movieId) {
  const resp = await axios.get(
    `${detailsUrl + movieId}/credits?language=en-US`,
    options,
  );
  return resp.data.cast;
}
