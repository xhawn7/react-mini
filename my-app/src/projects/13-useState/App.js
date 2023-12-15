import useFetch from "src/hooks/useFetch"
import CartList from 'src/components/CartList.js'
import { useAppCtx } from "./ctx"
import { useEffect,useState } from "react"
const App = () => {
  const endpoint = 'https://course-api.com/react-useReducer-cart-project'
  const {data,loading} = useFetch(endpoint)
  const {list,setList,total_price,set_total_price,total,set_total} = useAppCtx()
  useEffect(()=>{
    setList([...data])
    set_total(list.length)
    let p = 0
    list.forEach(element => {
      p+=element.amount*Number(element.price)
    });
    set_total_price(parseInt(p))
  },[data])
  if(loading){
    return <>loading...</>
  }
  return <>
    <h2>购物车：{total}</h2>
    <h2>total: {total_price}</h2>
    <main>
    {
      list.map(item=>{
        return <CartList key={item.id} {...item}/>
      })
    }
    </main>

    {list.length > 0 && 
    <>
      <button onClick={()=>setList([])}>clear all </button>
    </>
    }
  </>
}

export default App
