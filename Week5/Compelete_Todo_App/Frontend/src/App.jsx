import { useEffect, useState } from 'react'
import { CreateTodo } from '../src/Components/CreateTodo'
import { Todos } from './Components/Todos'

function App() {
  const [todos, setTodos] = useState([])
  
  useEffect(()=>{
  setInterval(fetchData, 10000);
  }, [])
  
  
  const fetchData = async () => {
  const response = await fetch("http://localhost:3000/todos");
  const json = await response.json();
  setTodos(json.todos)
  }
  
  return (
    
      <div>
        <CreateTodo></CreateTodo>
        <Todos todos={todos}></Todos>
      </div>
     
)}

export default App
