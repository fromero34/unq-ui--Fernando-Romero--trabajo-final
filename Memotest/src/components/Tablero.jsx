import Pieza from './Pieza'
import './Tablero.css'

const Tablero = ({piezas, handleClick, bool}) => {

    return (
        <div className='tablero'>
            {piezas.map((valor) => {
                return <Pieza valor={valor} handleClick={handleClick} bool={bool}/>
            })}
        </div>
    )
}
export default Tablero;