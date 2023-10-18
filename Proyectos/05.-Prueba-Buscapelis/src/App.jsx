import withResults from './mocks/with-results.json'
import withoutResults from './mocks/no-results.json'
import './App.css'

function App() {
  const movies = withResults.Search
  const hasMovie = movies?.length > 0

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className='form'>
          <label>
            Search Your Favorite Movie
          </label>
          <input type='text' placeholder='Avengers, Star Wars, Harry Potter...'>
          </input>
          <button type='submit'>
            Search
          </button>
        </form>
      </header>
      <main>
        {/* Aca Van las peliculas */}
        {
          hasMovie
          ? (
            <ul>
              {
                movies.map(movie => (
                  <li key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                    <img src={movie.Poster} alt={movie.Title} />
                  </li>
                ))
              }
            </ul>
          )
         : (
          <p>Dont have results</p>
        )
        }
      </main>
    </div>
  )
}

export default App
