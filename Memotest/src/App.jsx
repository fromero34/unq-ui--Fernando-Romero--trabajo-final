import { useState } from 'react'
import './App.css'
import Pieza from './components/Pieza'
import Tablero from './components/Tablero'

const emoji = [...'🍇🍊🍋🍎🍐🥥']
const piezasMemo = [1,2,3,4,1,2,3,4]

function App() {

  return (
    <Tablero piezas={piezasMemo} />
  )
}

export default App
