import{ useEffect, useState } from "react";

function App(){

  const [inputvalue, setinputValue]= useState('')
  const [count, setcount] = useState(0)
  const [sum, setsum] = useState(1)


  const handleInputChange = (event) => {
    setinputValue(event.target.value);
  };

  useEffect(()=>{
    let total = 0
  for (let i = 1; i <= inputvalue; i++) {
      total = total+i
  }

  setsum(()=>total)
  },[count])
  

 return <>

  <input type="text" onChange={handleInputChange} />

  <h4>Sum is{sum}</h4>

  <button onClick={()=>setcount(count+1)}> Counter {count}</button>

  </>

}


export default App;
