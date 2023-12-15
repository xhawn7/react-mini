// 后面引入的会覆盖前面引入的
// 如Test1和Test2里面都引入了blue这个样式，这个时候最终样式是后引入的Test1覆盖前面Test2引入的
import Test2 from "./Test2"
import Test1 from "./Test1"
const App = () =>{
  return (
    <div>1234
      <div className="blue">blue</div>
      <Test2 />
      <Test1 />
      
    </div>
  )
} 

export default App