import { useReducer,useEffect } from "react"
import {useHandleAction} from 'src/projects/13-useState/reducers.js'
import {useAppCtx} from 'src/projects/13-useState/ctx.js'

const CartList = (item) => {
  const {list,setList,set_total_price,set_total,total} = useAppCtx()
  const [state,dispatch] = useReducer(useHandleAction,{...item,total:total})
  const {title,price,img,amount,id} = state || {}
  useEffect(()=>{
    const newList = list.filter(item=>item.id !== id)
    if(amount===0){
      setList(newList)
    }
    set_total((pre)=>pre+=state.total)
    set_total_price(pre=>pre+=parseInt(state.price))
  },[amount])
  return <div>
    <h1>{title}</h1>
    <div>${price}</div>
    <div>{amount}</div>
    <div onClick={()=>dispatch('add')}>add</div>
    <div onClick={()=>dispatch('minus')}>minus</div>
    <div onClick={()=>dispatch('remove')}>remove</div>
    </div>
}

export default CartList