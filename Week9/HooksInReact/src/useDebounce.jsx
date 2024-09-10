import { useEffect, useState } from "react";

function useDebounce(inputvalue,time){

    const [debouncedvalue,setDebouncedvalue]= useState(inputvalue)

useEffect(()=>{
    
    const timer=setTimeout(()=>{
        setDebouncedvalue(inputvalue)
    },time)

    return ()=>clearInterval(timer)


},[inputvalue,time])

return debouncedvalue

}