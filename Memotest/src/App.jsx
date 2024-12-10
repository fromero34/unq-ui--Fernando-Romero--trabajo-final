import { useState } from 'react'
import './App.css'
import Pieza from './components/Pieza'
import Tablero from './components/Tablero'

const emoji = [...'🍇🍊🍋🍎🍐🥥',...'🍇🍊🍋🍎🍐🥥']

function App() {

  return (
    <div> 
    <h2> MEMOTEST </h2> 
    <Tablero piezas={emoji} />
    </div>
  )
}

export default App
