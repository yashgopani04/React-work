import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Changebg from './components/Changebg'


function App() 
{
  const [count, setCount] = useState(0)
  const [ color, setColor] = useState("olive")

  return (
    <>
    {/* <div>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5' >tailwinds</h1>

     <Card username='React Js' brnText = 'Click me'/>
     <br/>
     <Card username='Node JS' brnText = 'Read me'/>
    
</div> */}

<div className="w-full h-full duration-200" style={{backgroundColor : color}}>
    
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

    <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg'  style={{backgroundColor : 'red'}}>Red</button>    
    <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg'  style={{backgroundColor : 'green'}}>Green</button>    
    <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor : '#E6E6FA'}}>Lavander</button>    
    <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor : 'yellow'}}>Yellow</button>    
        
    </div>    
    </div>
    </div>

    {/* <Changebg/> */}

    </>
  )
}

export default App
