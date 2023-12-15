import { useReducer,useContext,createContext, useEffect } from "react"
import { reducer } from 'src/projects/13/reducer.js'
import useFetch from "src/hooks/useFetch"

const initValue = {
  amount:0,
  total:0,
  cart:[]
}

const AppCtx = createContext()

export const AppCtxProvider = ({children})=>{
  const [state,dispatch] = useReducer(reducer,initValue)
  const endpoint = 'https://course-api.com/react-useReducer-cart-project'
  const {data,loading} = useFetch(endpoint)
  // 获取数据
  const fetch_data = (data) => dispatch({type:'INIT_ALL',payload:data})
  // 移除所有数据
  const remove_all = () => dispatch({type:'REMOVE_ALL'})
  // 移除单条数据
  const remove_single = (id) => dispatch({type:'REMOVE_SINGLE',payload:id})
  // 改变amount
  const toggle_amount = (id,toggle_status) => dispatch({type:'TOGGLE_AMOUNT',payload:{id,toggle_status}})
  // 获取全部price以及amount
  const fetch_total = () => dispatch({type:'FETCH_TOTAL'})
  useEffect(()=>{
    fetch_data(data)
  },[data])
  useEffect(()=>{
    fetch_total()
  },[state.cart])
  return <AppCtx.Provider
      value ={{
        loading,
        ...state,
        remove_all,
        remove_single,
        toggle_amount,
      }}
  >
    {children}
  </AppCtx.Provider>
}

export const useAppCtx = () => useContext(AppCtx)
