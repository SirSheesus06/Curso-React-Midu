import { useState, useEffect} from 'react'
import './App.css'

function App() {
  const [enabled, setEnabled] = useState(false)

  const [position, setPosition] = useState({ x: 0, y: 0})

  useEffect(()=> {

    console.log('useEffect', {enabled})

    const handleMove = (event) => {

      const { clientX, clientY } = event

      setPosition({ x: clientX, y: clientY})

    }
    if (enabled) {

      window.addEventListener('pointermove', handleMove)
    }

    // Este return se utiliza para limpiar o desuscribir un evento
    // Al que hemos adhrido con addEventListener
    // Esto hace que inicie de 0 una vez que se desmonte el 
    // Componente o cambien las dependencias
    return () => { // A esta funcion se la llama clean up method
      window.removeEventListener('pointermove', handleMove)
    }

  }, [enabled])

  // [] Se ejecuta solo cuando se monta el componente
  // [enabled] Se ejecuta siempre que cambie esa dependencia
  // undefined(sin nada) Se ejecuta siempre que se renderiza

  return (
    <main>
      <h1>Mouse Follower</h1>
      <div style={{
        position: 'absolute',
        background: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => {
        setEnabled(!enabled)
      }}>
        {enabled ? 'Desactivar' : 'Activar'} Seguimiento
      </button>
    </main>
  )
}

export default App
