import { useEffect, useState } from 'react'
import '../style.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_IMAGE_PREFIX_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // Recuperar las palabras al cargar la pagina
  useEffect(() => {
    // Fetching de datos con la 1ra API
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json()) // Transformar a JSON
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  // Recuperar la imagen una vez que tenemos facts
  useEffect(() => {
    if (!fact) return
    // Divido el string en 3 separado por espacios
    // y lo uno con .join
    const threeWords = fact.split(' ', 3).join(' ')
    console.log(threeWords)

    fetch(`https://cataas.com/cat/says/${threeWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
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
