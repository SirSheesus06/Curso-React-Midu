import { useEffect, useState } from 'react'

// Creo un Csutom Hook con la logica para devolver un url con la imagen
export function useCatImage ({ fact }) {
  // const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
  const CAT_IMAGE_PREFIX_URL = 'https://cataas.com'
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

  return { imageUrl: `${CAT_IMAGE_PREFIX_URL}${imageUrl}` }
}
