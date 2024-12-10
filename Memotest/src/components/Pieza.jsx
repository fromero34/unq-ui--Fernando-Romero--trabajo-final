import './Pieza.css'

const Pieza = ({valor, handleClick, bool}) => {

    return (
    <div className='pieza' onClick={() => handleClick()}>
        <div className={`pieza-interna ${bool && 'pieza-girada'}`}>
            <div className='pieza-frente'> </div>
            <div className='pieza-dorso'>
                {valor}
            </div>
        </div>
    </div>
    )
}

export default Pieza;