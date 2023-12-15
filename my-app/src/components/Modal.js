import {useAppCtx} from 'src/projects/11/ctx.js'
import { FaTimes } from 'react-icons/fa';
const Model = () => {
  const {modal,closeModal} = useAppCtx()
  return (<div
  className={`${
    modal ? 'modal-overlay show-modal' : 'modal-overlay'
  }`}
>
  <div className='modal-container'>
    <h3>modal content</h3>
    <button className='close-modal-btn' onClick={closeModal}>
      <FaTimes></FaTimes>
    </button>
  </div>
</div>
)
}

export default Model