import { useState } from 'react'
import './App.css'
import Pieza from './components/Pieza'
import Tablero from './components/Tablero'

const emoji = [...'🍇🍊🍋🍎🍐🥥',...'🍇🍊🍋🍎🍐🥥']

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
