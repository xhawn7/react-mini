import menuData from 'src/static/menu-data.js'
import { useState } from 'react'
import MenuItem from 'src/components/MenuItem'
const App = () => {
  const [data, setData] = useState(menuData)
  const categories = ['all',...new Set(menuData.map(item=>item.category))]
  const [autofocus,setAutofocus] = useState(0) // 手机设置初始化时哪个btn点亮
  const setMenu = (category)=>{
    setAutofocus(null)
    if(category === 'all'){
      setData(menuData)
      return
    }
    setData(menuData.filter(item=>item.category === category))
  }
  return <>
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        {/* 目录 */}
        <div className="btn-container">
          {
            categories.map((category,index)=><button 
              type="button"
              // className="filter-btn"
              // className添加多个，注意如果用字符串拼接中间要加个' '
              className={`filter-btn ${index===autofocus?'auto-focus':''}`}
              key={index}
              onClick={()=>setMenu(category)}
              // 实现最后一个btn自动聚焦
              // autoFocus = {(index)=>{
              //   console.log(index)
              // }}

            >
              {category}
            </button>)
          }
        </div>
        {/* 列表 */}
        <div className='section-center'>
          {
            data.map(item=><MenuItem {...item} key = {item.id}/>)
          }
        </div>
      </section>
    </main>
  </>
}

export default App