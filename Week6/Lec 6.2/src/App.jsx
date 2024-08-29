import{ useEffect, useState } from "react";

function App() {
  
  return <div>
    <Todo id={2} />
    <Todo id={5} />
    <Todo id={1} />
    <Todo id={3} />
  </div>
}

function Todo({id}) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/todo?id="+id)
      .then(async (res) => {
        const json = await res.json();
        setTodo(json); 
      });
  }, []);
  

  return <div>
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App;
