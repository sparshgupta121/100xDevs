import { useState } from 'react'

import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      title:"Go to GYM",
      description:"From 7-9 AM",
      completed:false
    },
    {
      title:"STudy DSA",
      description:"From 9-11AM",
      completed:false
    },
    {
      title:"harkirat Cohort",
      description:"From 1-4 PM",
      completed:false
    }
  ])

  return (
    <>
   <div>
    <button style={
      {
        border:100,
        padding:100,
        backgroundColor:"pink"
      }

    }></button>
        {todos.map((todo, index) => (
          <CreateTODO key={index} title={todo.title} description={todo.description} />
        ))}
      </div>
    </>
  )
}

function CreateTODO(props){

  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>

  </div>
}

export default App
