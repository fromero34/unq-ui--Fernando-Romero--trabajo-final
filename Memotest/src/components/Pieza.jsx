import './Pieza.css'

const Pieza = ({valor}) => {

    return (
    <div className='pieza'>
        <div className={`pieza-interna ${false && 'pieza-girada'}`}>
            <div className='pieza-frente'> </div>
            <div className='pieza-dorso'>
                {valor}
            </div>
        </div>
    </div>
    )
}

export default Pieza;