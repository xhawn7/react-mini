import {useState,useContext,createContext} from 'react'

const AppCtx = createContext()

export const AppCtxProvider = ({children}) => {
  const [list,setList] = useState([])
  const [total_price,set_total_price] = useState(0)
  const [total,set_total] = useState(0)

  return <AppCtx.Provider value={{
    list,
    setList,
    total_price,
    set_total_price,
    total,
    set_total,
  }}>
    {children}
  </AppCtx.Provider>
}

export const useAppCtx = () => {
  return useContext(AppCtx)
}