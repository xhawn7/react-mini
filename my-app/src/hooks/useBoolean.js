import { useState } from "react"
// TODO:这里给它优化成对象会更好后期加入参数
// function useBoolean({trueInfo=null,falseInfo=null,state=true}){
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