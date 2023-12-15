import {useAppCtx} from 'src/projects/11/ctx.js'
import logo from 'src/static/logo.svg';
import { FaTimes } from 'react-icons/fa';
import { social, links } from 'src/static/11-data.js';

// 用useState需要一步步传递
// const Model1 = ({setToggle,status}) => {
//   return <div className={`container ${status?'hide':'show'}`}>
//     modal1
//     <button onClick={setToggle}>点击关闭</button>
//   </div>
// }
// 用useContext可以一步就实现多个层级数据的共享
const Sidebar = () => {
  const {sidebar,closeSidebar} = useAppCtx()
  return   <aside className={`${sidebar ? 'sidebar show-sidebar' : 'sidebar'}`}>
  <div className='sidebar-header'>
    <img src={logo} className='logo' alt='coding addict' />
    <button className='close-btn' onClick={closeSidebar}>
      <FaTimes />
    </button>
  </div>
  <ul className='links'>
    {links.map((link) => {
      const { id, url, text, icon } = link;
      return (
        <li key={id}>
          <a href={url}>
            {icon}
            {text}
          </a>
        </li>
      );
    })}
  </ul>
  <ul className='social-icons'>
    {social.map((link) => {
      const { id, url, icon } = link;
      return (
        <li key={id}>
          <a href={url}>{icon}</a>
        </li>
      );
    })}
  </ul>
</aside>
}

export default Sidebar