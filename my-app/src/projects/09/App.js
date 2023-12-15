import { useEffect, useState } from "react"
import Values from 'values.js'
import SingleColor from 'src/components/SingleColor.js'
import {FaRandom} from 'react-icons/fa';
const App = () => {
  const defaultColor = '#f15025'
  const [val,setVal] = useState(defaultColor)
  const [error,setError] = useState(false)
  const [list,setList] = useState(new Values(defaultColor).all(10))
  const changeList = ()=>{
    try{
      let colors = new Values(val).all(10)
      setList(colors)
    }catch(error){
      setError(true)
      console.log(error)
    }
  }
  const setRandom = () => {
    // 生成16进制的随机数
    const random16 = Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6,'0')
    setVal(`#${random16}`)
  }
  useEffect(()=>{
    changeList()
  },[val])
  // 如果不在子组件设置alert会有问题
  // const [alert,setAlert] = useState(false)
  // const clickColor = (hex) => {
  //   console.log(hex)
  //   setAlert(true)
  //   navigator.clipboard.writeText(`#${hex}`)
  // }
  // useEffect(()=>{
  //   const alertTimeout = setTimeout(()=>{
  //     setAlert(false)
  //   },1000)
  //   return ()=>clearTimeout(alertTimeout)
  // },[alert])
  return <>
    <section className='container'>
        <h3>color generator</h3>
        <input 
          type="text" 
          value={val} 
          onChange={(e)=>setVal(e.target.value)}
          className={error?'error':null}
        />
        <button className='btn'>submit</button>
        <button className='btn2' onClick={setRandom}><FaRandom /></button>
    
    </section>
    <section className='colors'>
        
        {
          list.map((item,index)=>{
            const {hex} = item
            // 如果不写成子组件此时alert会让每个item都复制
            // return <div style={{background:`#${hex}`,width:100,height:100}} onClick={()=>clickColor(hex)} key={index}>
            //   {hex}
            //   {alert && <p>copied to clipboard</p>}
            // </div>
            // 封装到子组件就只影响单个子组件的alert
            return <SingleColor hex={hex} key={index} index={index}/>
          })
        }
      </section>
  </>
}

export default App