import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts.js'

export function useCatFact () {
  // Estado donde se guaran los facts
  const [fact, setFact] = useState()

  const refreshFact = () => {
    // Obtengo el fact nuevo, luego lo paso por funcion a setFact y actualiza el estado
    getRandomFact().then(newFact => setFact(newFact))
  }
  // Recuperar las palabras al cargar la pagina
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
