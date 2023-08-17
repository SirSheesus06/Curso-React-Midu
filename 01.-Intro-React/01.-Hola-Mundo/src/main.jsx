import React from 'react'
import ReactDOM from 'react-dom/client'

const Button = ({text}) => {
  return (
    <button>{text}</button>
  )

}

const root = ReactDOM.createRoot(document.getElementById('root'))
      root.render(
        <React.Fragment>
          <Button text="Boton Nuevo 1"></Button>
          <Button text="Boton Nuevo 2"></Button>
          <Button text="Boton Nuevo 3"></Button>
        </React.Fragment>
      )
