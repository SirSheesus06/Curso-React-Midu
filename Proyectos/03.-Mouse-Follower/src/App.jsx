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
  }, [enabled])

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
