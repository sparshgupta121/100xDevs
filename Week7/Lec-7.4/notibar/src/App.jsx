import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { JobAtom, MessageAtom, MyNetworkAtom, NotificationAtom, SumSelector } from "../store/atoms"

function App() {


  return <RecoilRoot> 
      <MainAPP/>
    </RecoilRoot>
}

function MainAPP(){

  
  const NetworkCount = useRecoilValue(MyNetworkAtom)
  const JobCount = useRecoilValue(JobAtom)
  const [MessageCount,setMessagecount] = useRecoilState(MessageAtom)
  const NotiCount = useRecoilValue(NotificationAtom)
  const  TotalNotiCount= useRecoilValue(SumSelector)
  return(<div>
    <button>Home</button>
    <button>My Network({NetworkCount>=100?"99+":NetworkCount})</button>
    <button>Jobs({JobCount})</button>
    <button>Message({MessageCount})</button>
    <button>Notification({NotiCount})</button>
    <button onClick={()=>setMessagecount(c=>c+1)
    }>Me({TotalNotiCount})</button>
    </div>)

}

export default App
