import { useState } from "react";
import { CountContext } from "./context";
import { useContext } from "react";



function App(){

  const [count, setCount] = useState(0);


  return<>

    <CountContext.Provider value={{count,setCount}}>
    
    <CountRenderer/>

    </CountContext.Provider>

  </>


}

function CountRenderer(){

  return<>
  <Counter />
  <Buttons />
  </>
  
}

function Counter(){


  const {count} = useContext(CountContext)
  return<>

  <div>

  {count}
  </div>
    
    </>

}

function Buttons(){

  const {count,setCount} = useContext(CountContext)

  return(

    <div>

    <button onClick={function Increase(){setCount(count+1)}}>Increase count</button>

    <button onClick={function Decrease(){setCount(count-1)}}>Decrease Count</button>
    
    </div>


  )

}




export default App;