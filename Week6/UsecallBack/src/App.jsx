import { memo, useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  const Logsomething = useCallback(()=> {
    console.log("child clicked")
  },[])

  return <div>
    <Child InputFunc={Logsomething} />
    <button onClick={() => {
      setCount(count + 1);
    }}>Click me {count}</button>
  </div>
}

const Child = memo(({InputFunc}) => {
  console.log("child render")

  return <div>
    <button onClick={InputFunc}>Button clicked</button>
  </div>
})

export default App;