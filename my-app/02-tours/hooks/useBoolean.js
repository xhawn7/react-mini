import { useState } from "react"
function useBoolean(trueInfo=null,falseInfo=null,state=true){
  const [status,setStatus] = useState(state)
  const info = status?trueInfo:falseInfo
  return{
    status,
    info,
    setTrue:()=>setStatus(true),
    setFalse:()=>setStatus(false),
    setToggle:()=>setStatus(!status)
  }
}

export default useBoolean