import './Pieza.css'

const Pieza = ({pieza, handleClick, bloquearTablero}) => {

    return (
    <div className='pieza' onClick={() => ((!pieza.girada && !bloquearTablero) && handleClick(pieza))}>
        <div className={`pieza-interna ${pieza.girada && 'pieza-girada'}`}>
            <div className='pieza-frente'> {'❔'} </div>
            <div className='pieza-dorso'> {pieza.imagen} </div>
        </div>
    </div>
    )
}

export default Pieza;