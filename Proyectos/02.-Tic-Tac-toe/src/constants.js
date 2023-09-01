// Creamos los turnos posibles
export const TURNS = {
    X: 'X',
    O: 'O'
}

  // Creamos un array que contenga las combinaciones posibles para ganar
export const WINNER_COMBOS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
]