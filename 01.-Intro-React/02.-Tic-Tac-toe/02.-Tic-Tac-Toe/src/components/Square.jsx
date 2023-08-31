// Creo el cuadrado donde se va a mostrar 'O' o 'X'
export const Square = ({ children, isSelected, updateBoard, index}) => {

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