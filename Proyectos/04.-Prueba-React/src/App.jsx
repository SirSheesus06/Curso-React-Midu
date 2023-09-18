import { useEffect, useState } from 'react'
import '../style.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_IMAGE_PREFIX_URL = 'https://cataas.com'

export function App () {
  // Estado donde se guaran los facts
  const [fact, setFact] = useState()

  // Estados donde se guardan las imagenes
  const [imageUrl, setImageUrl] = useState()

  // Recuperar las palabras al cargar la pagina
  useEffect(() => {
    // Fetching de datos con la 1ra API
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json()) // Transformar a JSON
      .then(data => {
        const { fact } = data // Obtener de data el fact y almacenarlo
        setFact(fact) // Actualizar el estado fact
      })
  }, [])

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

  return (
    <main className='main-container'>
      <h1>App de Gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_IMAGE_PREFIX_URL}${imageUrl}`} alt='cats image' />}
    </main>
  )
}
