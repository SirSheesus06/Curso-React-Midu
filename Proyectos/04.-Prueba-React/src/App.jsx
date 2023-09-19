import { useEffect, useState } from 'react'
import { getRandomFact } from './services/facts.js'
import '../style.css'

// const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_IMAGE_PREFIX_URL = 'https://cataas.com'

function useCatImage ({ fact }) {
  // Estados donde se guardan las imagenes
  const [imageUrl, setImageUrl] = useState()

  // Recuperar la imagen una vez que tenemos facts
  useEffect(() => {
    // Si fact esta vacio o null, retorna nada
    if (!fact) return
    // Divido el string en 3 separado por espacios
    // y lo uno con .join
    const threeWords = fact.split(' ', 3).join(' ')
    console.log(threeWords)

    fetch(`https://cataas.com/cat/says/${threeWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => { // Recupero la respuesta y la guardo en url
        const { url } = response
        setImageUrl(url) // Actualizo el estado con url
      })
  }, [fact])

  return { imageUrl }
}

export function App () {
  // Estado donde se guaran los facts
  const [fact, setFact] = useState()
  // Se crea imageUrl que contendra el custom hook con fact como parametro
  const { imageUrl } = useCatImage({ fact })

  // Recuperar las palabras al cargar la pagina
  useEffect(() => {
    // Obtengo el fact nuevo, luego lo paso por funcion a setFact y actualiza el estado
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main className='main-container'>
      <h1>App de Gatitos</h1>
      <button onClick={handleClick}>Recargar Fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_IMAGE_PREFIX_URL}${imageUrl}`} alt='cats image' />}
    </main>
  )
}
