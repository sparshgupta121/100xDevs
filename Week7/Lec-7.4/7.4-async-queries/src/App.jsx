import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import {MyAtom,SumSelector} from "../store/atoms"
import { useEffect } from "react"
import axios from'axios'

function App() {


  return <RecoilRoot> 
      <MainAPP/>
    </RecoilRoot>
}

function MainAPP(){

  const setMyAtom = useSetRecoilState(MyAtom)

  useEffect(() => {
    axios.get("http://localhost:3000/")
    .then(res=>{
      setMyAtom(res.data)
    })
  
  }, [])
  
  const MyNotiCount = useRecoilValue(MyAtom)
  const  TotalNotiCount= useRecoilValue(SumSelector)

  
  return(<div>
    <button>Home</button>
    <button>My Network({MyNotiCount.network>=100?"99+":MyNotiCount.network})</button>
    <button>Jobs({MyNotiCount.jobs})</button>
    <button>Message({MyNotiCount.messages})</button>
    <button>Notification({MyNotiCount.notifications})</button>
    <button>Me({TotalNotiCount})</button>
    </div>)

}

export default App
