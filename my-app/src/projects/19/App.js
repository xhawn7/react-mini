import { useFormCtx } from "./FormCtx"
import InitialForm from "./InitialForm"
import Loading from "src/components/Loading"
import Form from "./Form"
const App = () => {
  // 1. 初始页
  // 2. loading 
  // 3. 问题next页面 => 结束弹窗
  const {initing,loading} = useFormCtx()
  if(initing){
    return <InitialForm/>
  }
  if(loading){
    return <Loading/>
  }
  return <Form/>
}

export default App