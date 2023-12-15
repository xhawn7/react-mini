// import useBoolean from 'src/hooks/useBoolean.js'
import Sidebar from 'src/components/Sidebar.js'
import Model from 'src/components/Modal.js'
import {useAppCtx} from 'src/projects/11/ctx.js'
import { FaBars } from 'react-icons/fa';

const App = () => {
  // const navList = ['home',]
  // const {status,setToggle} = useBoolean()
  const {openSidebar,openModal} = useAppCtx()
  return  <main>
      {/* 用useState的做法 */}
      {/* <button onClick={setToggle}>点击modal1</button>
      <Model1 setToggle={setToggle} status={status} /> */}
      {/* <button onClick={openModal1}>打开modal1</button>
      {modal1 && <Model1 />}
      <button onClick={openModal2}>打开modal2</button>
      {modal2 && <Model2 />} */}
      {/* 用useContext */}
      <button onClick={openSidebar} className='sidebar-toggle'>
        <FaBars />
      </button>
      <button onClick={openModal} className='btn'>
        show modal
      </button>
      <Sidebar />
      <Model />
    </main>
}

export default App