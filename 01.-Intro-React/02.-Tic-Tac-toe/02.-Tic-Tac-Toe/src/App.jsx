
import { useState } from 'react'
import './App.css'


// Creamos los turnos posibles
const TURNS = {
  X: 'X',
  O: 'O'
}

// Creamos un array que contenga las combinaciones posibles para ganar
const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

// Creo el cuadrado donde se va a mostrar 'O' o 'X'
const Square = ({ children, isSelected, updateBoard, index}) => {

  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)

  }
  return (
    // Cuando el usuario hace click llama a handleClik que a su vez
    // LLama a updateBoard para actualizar el estado
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

function App() {

  // Creo el tablero que renderizara el juego
  // Tendra 9 cuadrados creados decretados como un array
  // Al cual le indico la cantidad que quiero con el metodo .fill()
  const [board, setBoard] = useState(Array(9).fill(null))

  // Creo el estado inicial de los Turnos, al cual
  // LE asigno por defecto que inicie en 'X'
  const [turn, setTurn] = useState(TURNS.X)

  // Encontar el ganador
  // Si no hay ganador, null, por eso como estado inicial
  const [winner, setWinner] = useState(null)


  const updateBoard = (index) => {
    // No actualizamos si el board ya tiene algo
    if (board[index] || winner) return 

    // IMPORTANTE!! Siempre se debe generar un nuevo array
    // LOS ESTADOS SIEMPRE HAY QUE TRATARLOS COMO INMUTABLES
    // Si se modifica un dato, SIEMPRE hay que pasarle un array, objeto, etc nuevo
    // Para no tener problemas de renderizado

    // Entonces en cada click se genera un nuevo board
    const newBoard = [...board]

    // A ese indice del nuevo board se le asigna el valor del turno actual
    newBoard[index] = turn // Puede ser 'X' u 'O'
    
    // Y luego actualizamos el board con el metodo del useState correspondiente
    setBoard(newBoard)

    // Comprobar que turno es el actual y pasarlo al contrario
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    // Con esto hacemos que se elija el turno a jugar
    
    // Y se lo pasamos a setTurn para que actualize el estado
    setTurn(newTurn)

    // Luego vamos a revisar si hay un ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      alert(`Ha ganado ${newWinner}`)
    }

  }

  // Comprobar si existe la combinacion ganadora
  const checkWinner = (boardToCheck) => {
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

  return (

    <main className='board'>
      <h1>Tic-Tac-Toe</h1>
      <section className='game'>
        {
          // Se renderiza el tablero, que dentro va a tener el componente
          // <Square />, repetido 9 veces
          board.map((_, index) => {
            return (
              <Square 
                key={index} 
                // Con esto sabemos el indice de cada Square
                index={index}
                // En Vez de pasar la ejecucion de la funcion
                // Se pasa la funcion para que se ejecute
                // Solo cuando se hace click en un componente <Square />
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square></Square>
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  )
}

export default App
