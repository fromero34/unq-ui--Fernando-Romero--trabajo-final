import Pieza from './Pieza'
import './Tablero.css'

const Tablero = ({piezas, handleClick, bloquearTablero}) => {

    return (
        <div className='tablero'>
            {piezas.map((pieza, i) => {
                return <Pieza key={`${i}_${pieza.imagen}`} pieza={pieza} handleClick={handleClick} bloquearTablero={bloquearTablero}/>
            })}
        </div>
    )
}
export default Tablero;