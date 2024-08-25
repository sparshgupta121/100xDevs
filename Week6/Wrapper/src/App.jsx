
import React, { useState } from "react"


function App(){

return <>
<CardDwrappper innerComp={<Textcomp/>}></CardDwrappper>
<CardDwrappper innerComp={<Textcomp2/>}></CardDwrappper>
</>
}

function Textcomp(){

  return <div>
    Hi I'm sparsh
  </div>

}

function Textcomp2(){

  return <div>
    Kyaa haal Chal ?
  </div>

}

function CardDwrappper({innerComp}){



  return <div style={{border:"2px solid black" , height:"200px" , width:"150px"}}>

  {innerComp}

  </div>

}


export default App;
