// 通过css module的方式实现样式隔离
// 此时Test1的blue是Test1的, Test2的blue是Test2的
import Test1 from "./Test1.js"
import Test2 from "./Test2.js"
import style from './index.module.css';

const App = () =>{
  return (
    <div>
      <div className={style.blue}>源文件的blue111</div>
      <Test2 />
      <Test1 />
      
    </div>
  )
} 

export default App