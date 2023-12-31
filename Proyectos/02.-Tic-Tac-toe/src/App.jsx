
import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinnerFrom, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import './App.css'


function App() {

  // Inicializo el estado inicial con una funcion
  // Que si tiene el board en local storage devuelve
  // Sino por defecto inicia un board de 9 lugares vacios
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage 
            ? JSON.parse(boardFromStorage) 
            : Array(9).fill(null)
  })

  // Creo el estado inicial de los Turnos,
  // Y primero consulta en local storage si este tiene un TURN
  // Sino, inicia por defecto el turno 'X'
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn') // Ya es String
    return turnFromStorage ?? TURNS.X 
  })

  // Encontar el ganador
  // Si no hay ganador, null, por eso como estado inicial
  const [winner, setWinner] = useState(null)

  // Restear el Juego mediante una funcion
  // Hay que setear de nuevo los estados al valor inicial
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    // Tambien resetear local storage
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

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

    // Guardar partida en LocalStorage para retomar en caso de recargar pagina
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    // Luego vamos a revisar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }

  }

  return (

    <main className='board'>
      <h1>Tic-Tac-Toe</h1>
      <button onClick={resetGame}>Resetear Juego</button>
      <section className='game'>
        {
          // Se renderiza el tablero, que dentro va a tener el componente
          // <Square />, repetido 9 veces
          board.map((square, index) => {
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
                {square}
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
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
