
import { useState } from 'react'
import './App.css'

function App() {

  const [count,setcount]=useState(0)

  return (
          <div>
            <Custombutton count={count} setcount={setcount}></Custombutton>
        </div>
  )

}

function Custombutton(props){

  function Onclickhandler(){
    props.setcount(props.count+1)
  }

  return(
    <button onClick={Onclickhandler}>Counter {props.count}</button>
  )
}

export default App
