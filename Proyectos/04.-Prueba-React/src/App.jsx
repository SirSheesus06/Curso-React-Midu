import { useEffect, useState } from 'react'

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}`
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App () {
  const [fact, setFact] = useState()

  useEffect(() => {
    // Fetching de datos con la 1ra API
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json()) // Transformar a JSON
      .then(data => setFact(data.fact))
  }, [])

  return (
    <main>
      <h1>App de Gatitos</h1>
      {fact && <p>{fact}</p>}
    </main>
  )
}
