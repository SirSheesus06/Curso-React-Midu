const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

// Creo una funcion que obtenga un fact random
export const getRandomFact = async () => {
  // NUNCA LLAMAR UN STATE EN UNA FUNCION
  // Fetching de datos con la 1ra API
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json() // Transforma la respuesta a JSON
  const { fact } = data // Obtener de data el fact y almacenarlo
  return fact // Devuelve el fact
}
