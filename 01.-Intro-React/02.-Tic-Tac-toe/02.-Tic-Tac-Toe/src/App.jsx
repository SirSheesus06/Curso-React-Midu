
import { useState } from 'react'
import './App.css'


// Creamos los turnos posibles
const TURNS = {
  X: 'X',
  O: 'O'
}

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

  const updateBoard = (index) => {
    // Primero hay que comprobar que turno es el actual y pasarlo al contrario
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    // Con esto hacemos que se elija el turno a jugar
    // Y se lo pasamos a setTurn para que actualize el estado
    setTurn(newTurn)

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
