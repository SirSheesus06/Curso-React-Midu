import { WINNER_COMBOS } from "../constants"

// Comprobar si existe la combinacion ganadora
export const checkWinnerFrom = (boardToCheck) => {
    // Creamos un loop que recorra las posiciones de boardToCheck
    // Luego recupera los 3 primeras posiciones de cada turno
    // Si la primera y la segunda son iguales, y la primera y la tercera tambien
    // Devuelve la primera como ganadora
    for ( const combo of WINNER_COMBOS) {
        const [ a, b, c] = combo
        if (
            boardToCheck[a] && // Si es 'X' u 'O'
            boardToCheck[a] === boardToCheck[b] && 
            boardToCheck[a] === boardToCheck[c]
        ) 
        {
            return boardToCheck[a] // Devuelve 'X' u 'O'
        }
    }
    // Si no hay ganador debe devolver null
    return null
}

// Chequear si el juego esta terminado sin ganador
export const checkEndGame = (newBoard) => {
  // Revisamos si hay empate
  // Si no hay espacios vacios en el tablero
  // Chequeamos si todos los casilleros son diferentes de null
    return newBoard.every((square) => square !== null)
}