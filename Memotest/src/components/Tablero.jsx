import Pieza from './Pieza'
import './Tablero.css'

const Tablero = ({piezas}) => {

    return (
        <div className='tablero'>
            {piezas.map((valor) => {
                return <Pieza valor={valor}/>
            })}
        </div>
    )
}
export default Tablero;