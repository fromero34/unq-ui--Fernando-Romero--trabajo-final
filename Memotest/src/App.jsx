import { useState } from 'react'
import './App.css'
import Tablero from './components/Tablero'
import { useEffect } from 'react'

const imagen = [...'🍇🍊🍋🍎🍐🥥',...'🍇🍊🍋🍎🍐🥥']
                                                       
function App() {

  const [piezasMezcladas, setPiezasMezcladas] = useState([])
  const [seleccionado, setSeleccionado] = useState(null)
  const [bloquearTablero, setBloquearTablero] = useState(false)
  const [piezasAdivinadas, setPiezasAdivinadas] = useState(0)
  const [victoria, setVictoria] = useState('')
  const [reiniciarJuego , setReiniciarJuego] = useState(false)

  useEffect ( () => {               /*Algoritmo para mezclar elementos de un array*/
    setPiezasMezcladas(imagen.sort(() => Math.random() - 0.5).map((imagen,i) => ({index: i, imagen, girada:false})))
  },[reiniciarJuego])

  const resetearJuego = () => {
    setPiezasMezcladas([])
    setSeleccionado(null)
    setBloquearTablero(false)
    setPiezasAdivinadas(0)
    setVictoria('')
    setReiniciarJuego(!reiniciarJuego)
  }

  const handleClick = (pieza) => {
    const piezaGirada = {...pieza, girada:true}
    let piezasMezcladasCopia = [...piezasMezcladas]
    piezasMezcladasCopia.splice(pieza.index, 1, piezaGirada)
    setPiezasMezcladas(piezasMezcladasCopia)
    /* Si es la primera pieza*/
    if (seleccionado === null) {
      setSeleccionado(pieza)
    /* Si matchean las piezas*/
    } else if (seleccionado.imagen === pieza.imagen) {
      setSeleccionado(null)
      if (piezasAdivinadas === (piezasMezcladas.length / 2) - 1) {
        setVictoria('¡Felicitaciones, ganaste el juego!')
      } else {
        setPiezasAdivinadas(piezasAdivinadas + 1)
      }
    /* No matchean las piezas*/
    } else {
      setBloquearTablero(true)
      setTimeout(() => {
        piezasMezcladasCopia.splice(pieza.index,1,pieza)
        piezasMezcladasCopia.splice(seleccionado.index,1,seleccionado)
        setPiezasMezcladas(piezasMezcladasCopia)
        setSeleccionado(null)
        setBloquearTablero(false)
      },1000)
    }
  }

  return (
    <div> 
    <h1> MEMOTEST </h1>
    <h1> {victoria} </h1>
    <Tablero piezas={piezasMezcladas} handleClick={handleClick} bloquearTablero={bloquearTablero}/>
    <button onClick={resetearJuego}> Comenzar de nuevo </button>
    </div>
  )
}

export default App
