

function ListOfMovies( {movies} ) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
        </li>
      ))}
    </ul>
  );
}

function NoMoviesResults () {
    return (
        <p>Dont have results</p>
    )
}

export function Movies( {movies} ) {
    
    const hasMovie = movies?.length > 0

    return (
        hasMovie
        ? <Movies ListOfMovies={movies} />
        : <NoMoviesResults />
    )
}