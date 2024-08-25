
import React, { useState } from "react"

let Globalid =4;

function App(){

    const [Todosss, setTodosss] = useState([{

      id:1,
      title:"Go to Gym",
      description:"Leg Exercise"

    },

    {

      id:2,
      title:"Go to College",
      description:"classes from 9 -5"

    },

    {

      id:3,
      title:"GO to Library",
      description:"Study DSA"

    }

  
  ])


  function addtodo(){

    setTodosss([...Todosss,{

      id:Globalid,
      title:`new todo ${Globalid} `, 
      description:"desc of todo",

    }])

    Globalid++

  }


  return(
  <div>
    <button onClick={addtodo}>Click to Add Todo</button>
    {Todosss.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}></Todo> )}
  </div>
)
  
}

function Todo({title,description}){

return(
  <div>
    <h2>{title}</h2>
    <h4>{description}</h4>
  </div>
)

}



export default App;
