import { useState } from 'react'
import './App.css'
import Tablero from './components/Tablero'
import { useEffect } from 'react'

function App() {

  const [piezasMezcladas, setPiezasMezcladas] = useState([])
  const [seleccionado, setSeleccionado] = useState(null)
  const [bloquearTablero, setBloquearTablero] = useState(false)
  const [piezasAdivinadas, setPiezasAdivinadas] = useState(0)
  const [victoria, setVictoria] = useState('')
  const [reiniciarJuego , setReiniciarJuego] = useState(false)
  const [tamañoTablero, setTamañoTablero] = useState(4)
                                                                    /* El tamaño del tablero debe ser un número par, por eso no puse 3x3 ni 5x5*/
  const masImagenes = [...'🍇🍊🍋🍎🍐🥥🍌🍒🍓🥝🍅🍈🍉🥑🍆🥔'].slice(0,tamañoTablero * 2)
  const imagen = [...masImagenes,...masImagenes]

  /* Cambiar tamaño del tablero mediante input*/
  const handleTamaño = (event) => {
    const nuevoTamaño = event.target.value
    setTamañoTablero(nuevoTamaño)
  }

  useEffect ( () => {               /*Algoritmo para mezclar elementos de un array*/
    setPiezasMezcladas(imagen.sort(() => Math.random() - 0.5).map((imagen,i) => ({index: i, imagen, girada:false})))
  },[reiniciarJuego])                                                            /* Parámetros para las piezas*/

  const resetearJuego = () => {
    setPiezasMezcladas([])
    setSeleccionado(null)
    setBloquearTablero(false)
    setPiezasAdivinadas(0)
    setVictoria('')
    setReiniciarJuego(!reiniciarJuego)
  }

  const handleClick = (pieza) => {
    /* Se copia la pieza con el atributo girado en true y el tablero y luego se reemplazan en el original*/
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
      /* Victoria */
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
    <h2> MEMOTEST </h2>
    <h1> {victoria} </h1>
    <div> 
    <select value={tamañoTablero} onChange={handleTamaño}>
    <option value={1}> 2x2 </option>
    <option value={4}> 4x4 </option>
    <option value={8}> 6x6 </option> 
    </select>
    </div>
    <button onClick={resetearJuego}> Comenzar de nuevo </button>
    <Tablero piezas={piezasMezcladas} handleClick={handleClick} bloquearTablero={bloquearTablero}/>
    </div>
  )
}
export default App
