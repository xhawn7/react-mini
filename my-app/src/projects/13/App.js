import Header from "./Header"
import Menu from "./Menu"
import Loading from "src/components/Loading"
import EmptyPage from "src/components/EmptyPage.js"
import {useAppCtx} from 'src/projects/13/app_ctx.js'
const App = () => {
  /**
   * 2个父组件：Header & Menu
   * 单条menu的子组件
   * 操作：全部数据的加载与删除、单条数据增减删，会影响到的变量amount/price
   */
  const {loading,cart} = useAppCtx()
  if(loading){
    return <Loading/>
  }
  if(cart.length===0){
    return <EmptyPage/>
  }
  return <>
    <main>
      <Header />
      <Menu />
    </main>
  </>
}

export default App
