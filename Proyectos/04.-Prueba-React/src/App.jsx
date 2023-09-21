import '../style.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'

export function App () {
  // Utilizo el custom Hook creado por fuera
  const { fact, refreshFact } = useCatFact()
  // Se crea imageUrl que contendra el custom hook con fact como parametro
  const { imageUrl } = useCatImage({ fact })
  // Se crea la funcion a a la cual llama el boton
  const handleClick = async () => {
    // Esta funcion llama al metodo que devuelve el custom Hook useCatFact
    refreshFact()
  }

  return (
    <main className='main-container'>
      <h1>App de Gatitos</h1>
      <button onClick={handleClick}>Recargar Fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt='cats image' />}
    </main>
  )
}
