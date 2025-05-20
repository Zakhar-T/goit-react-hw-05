export default function MoviesPage() {
  return (
    <>
      <form>
        <label htmlFor="movieSearch">Search for movies</label>
        <input type="text" name="movieSearch" />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && <ul></ul>}
    </>
  );
}
