import { useState } from 'react'
import './App.css'
import Pieza from './components/Pieza'
import Tablero from './components/Tablero'
import { useEffect } from 'react'

const imagen = [...'🍇🍊🍋🍎🍐🥥',...'🍇🍊🍋🍎🍐🥥'].sort(() => Math.random() - 0.5)
                                                       /*Algoritmo para mezclar elementos de un array*/

function App() {

  const [piezasMezcladas, setPiezasMezcladas] = useState([])
  const [seleccionado, setSeleccionado] = useState(null)
  const [bloquearTablero, setBloquearTablero] = useState(false)

  useEffect ( () => {
    setPiezasMezcladas(imagen.map((imagen,i) => ({index: i, imagen, girada:false})))
  },[])

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
    <Tablero piezas={piezasMezcladas} handleClick={handleClick} bloquearTablero={bloquearTablero}/>
    </div>
  )
}

export default App
