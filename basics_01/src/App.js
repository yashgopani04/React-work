import Helloworld from './Helloworld'
import Counter from './Components/Counter'

function App() {

const language = 'React JS'

  return (
    <> 
    <h1>This is {language}</h1>
    <Helloworld/>
    <Counter/>
    
  </>
  );
}


export default App;