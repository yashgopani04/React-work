import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5' >tailwinds</h1>

     <Card username='React Js' brnText = 'Click me'/>
     <br/>
     <Card username='Node JS' brnText = 'Read me'/>
    
</div>

    </>
  )
}

export default App
