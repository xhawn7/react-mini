import Submenu from "src/components/Submenu"
import {useState} from 'react'
import sublinks from 'src/static/12-data.js'
import { FaBars } from 'react-icons/fa';

const App = () => {
  /* 
  1. 数据跟着走
  2. 浮窗跟着出现
  */
  const list = sublinks.map(item=>({...item,status:false}))
  const [menu,setMenu] = useState(list)
  const mouse_enter = (page) => {
    const newMenu = list.map(item=>{
      if(item.page === page){
        item.status = true
      } 
      return item
    })
    setMenu(newMenu)
  }
  const mouse_leave = () => {
    list.forEach(item=>item.status = false)
    setMenu(list)
  }
  return <>
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={null} className='nav-logo' alt='' />
          <button className='btn toggle-btn' >
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {
            menu.map(item=>{
              const {page,status,links} = item
              return <button className="link-btn" onMouseMove={()=>mouse_enter(page)} onMouseLeave={mouse_leave}>
                  {page}
                  {status && <Submenu page={page} links={links}/>}
                </button>
            })
          }
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>

  </>
}

export default App