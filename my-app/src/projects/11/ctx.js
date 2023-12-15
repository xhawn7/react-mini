import {useState,useContext,createContext} from 'react'

const AppCtx = createContext()

const AppCtxProvider = ({children}) => {
  const [sidebar,setSidebar] = useState(false)
  const [modal,setModal] = useState(false)
  return <AppCtx.Provider value={{
    sidebar,
    openSidebar: () => setSidebar(true),
    closeSidebar: () => setSidebar(false),
    modal,
    openModal: () => setModal(true),
    closeModal: () => setModal(false),
  }}>
    {children}
  </AppCtx.Provider>
}

const useAppCtx = ()=>{
  return useContext(AppCtx)
}

export {AppCtxProvider,useAppCtx}

