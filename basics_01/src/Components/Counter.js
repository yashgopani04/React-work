import { React , useState } from "react"

function Counter(){

    let [counter, setCounter] = useState(0)

    const addValue = () =>{

    if (counter !== 20) {
        
        counter = counter + 1;
        setCounter(counter)
         
    }else
    {
        console.log('You react at your max attempt');
    }    


    }

    const removeValue = () =>{

    if(counter !== 0){

        counter = counter - 1;
    
        setCounter(counter)

    }else{

        console.log('Negative is not Possible');
    }


    }

    // let counter = 5;

    return(

    <div>
    
    <h2>Counter value {counter}</h2>

    <div>

    <button onClick={addValue}>Add value</button>
    <h6>Max value you can set is 20</h6>

    <br/>

    <button onClick={removeValue}>Remove value</button>
    <h6>Min value you can remove until 0</h6>
    </div>


    </div>
    )
}

export default Counter