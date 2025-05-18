import axios from 'axios';

const url = 'https://api.themoviedb.org/3/list/list_id?language=en-US&page=1';
const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTAzZGNlOWNiMzExMjA1OGJhZTY4YzY1NDJhZDAwNCIsIm5iZiI6MTc0NzU4NjAwNS4wMDcsInN1YiI6IjY4MmEwYmQ0ZTRiM2Y5OTlkZmUyNDg5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZiMHCJyBANa8gOytJzRf7JAiDVD-lVTB-_RUL-yWn8E',
  },
};

function fetchTrendingMovies() {
  axios
    .get(url, options)
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
