import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Form from './Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hola mundo</h1>
      <Header/>
      <Form/>


    </div>
  )
}

export default App
