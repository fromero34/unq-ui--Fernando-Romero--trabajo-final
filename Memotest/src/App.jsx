import { useState } from 'react'
import './App.css'
import Pieza from './components/Pieza'
import Tablero from './components/Tablero'
import { useEffect } from 'react'

const emoji = [...'🍇🍊🍋🍎🍐🥥',...'🍇🍊🍋🍎🍐🥥'].sort(() => Math.random() - 0.5)
                                                       /*Algoritmo para mezclar elementos de un array*/

function App() {

  const [bool,setBool] = useState(false)

  const handleClick = () => {
    setBool(!bool)
  }

  return (
    <div> 
    <h2> MEMOTEST </h2>
    <Tablero piezas={emoji} handleClick={handleClick} bool={bool}/>
    </div>
  )
}

export default App
