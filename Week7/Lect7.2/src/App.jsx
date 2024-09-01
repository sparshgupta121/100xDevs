import { useState } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, EvenSelctor } from "./store/atom/count";

function App(){

  const [count, setCount] = useState(0);

  return<>
    <CountRenderer/>
  </>

}

function CountRenderer(){

  return<>
  <RecoilRoot>
  <Counter />
  <Buttons />
  </RecoilRoot>

  </>
  
}

function Counter(){

  const count=useRecoilValue(countAtom)
  return<>

  <div>
  {count}
  <b>

    <EvenorNot />
  </b>
  </div>
    
    </>

}

function EvenorNot(){
  const isEven = useRecoilValue(EvenSelctor)

  return<div>
    {(isEven)?"is even":null}
  </div>
}

function Buttons(){
  
  const setCount = useSetRecoilState(countAtom)

  return(

    <div>

    <button onClick={()=>{setCount(c=>c+1)}}>Increase count</button>

    <button onClick={()=>{setCount(c=>c-1)}}>Decrease Count</button>
    
    </div>


  )

}

export default App;