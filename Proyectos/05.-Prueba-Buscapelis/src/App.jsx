import withResults from './mocks/with-results.json'
import withoutResults from './mocks/no-results.json'
import { Movies } from './mocks/components/Movies'
import './App.css'

function App() {
  const movies = withResults.Search

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
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App
