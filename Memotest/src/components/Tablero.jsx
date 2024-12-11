import Pieza from './Pieza'
import './Tablero.css'

const Tablero = ({piezas, handleClick}) => {

    return (
        <div className='tablero'>
            {piezas.map((pieza, i) => {
                return <Pieza key={`${i}_${pieza.imagen}`} pieza={pieza} handleClick={handleClick}/>
            })}
        </div>
    )
}
export default Tablero;