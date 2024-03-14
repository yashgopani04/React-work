import Helloworld from './Helloworld'
import Counter from './Components/Counter'
import { useState } from 'react';

function App() {

const language = 'React JS'

const [color , setColor] = useState("olive")

  return (
    <> 
    {/* <h1>This is {language}</h1>
    <Helloworld/>
    <Counter/> */}

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
    
  </>
  );
}

export default App;