import { useFormCtx } from "./FormCtx"

const Modal = () => {
  const {index,correctNum,playAgain,showModal} = useFormCtx()
  const res = Math.round(correctNum/(index+1)*10000)/100.00 + '%'
  return <div
      className={`${
        showModal ? 'modal-container isOpen' : 'modal-container'
      }`}
    >
      <div className='modal-content'>
        <h2>congrats!</h2>
        <p>
          You answered {res} of
          questions correctly
        </p>
        <button className='close-btn' onClick={playAgain}>
          play again
        </button>
      </div>
    </div>
}

export default Modal