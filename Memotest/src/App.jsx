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

  useEffect ( () => {
    setPiezasMezcladas(imagen.map((imagen,i) => ({index: i, imagen, girada:false})))
  },[])

  const handleClick = (pieza) => {
    const piezaGirada = {...pieza, girada:true}
    let piezasMezcladasCopia = [...piezasMezcladas]
    piezasMezcladasCopia.splice(pieza.index, 1, piezaGirada)
    setPiezasMezcladas(piezasMezcladasCopia)
    if (seleccionado === null) {
      setSeleccionado(pieza)
    } else if (seleccionado.imagen === pieza.imagen) {
      setSeleccionado(null)
    } else {
      setTimeout(() => {
        piezasMezcladasCopia.splice(pieza.index,1,pieza)
        piezasMezcladasCopia.splice(seleccionado.index,1,seleccionado)
        setPiezasMezcladas(piezasMezcladasCopia)
        setSeleccionado(null)
      },1000)
    }
  }

  return (
    <div> 
    <h2> MEMOTEST </h2>
    <Tablero piezas={piezasMezcladas} handleClick={handleClick}/>
    </div>
  )
}

export default App
