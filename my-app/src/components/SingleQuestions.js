import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import useBoolean from 'src/hooks/useBoolean.js';
const SingleQuestions = ({title,info}) => {
  const { status,setToggle,info:answer } = useBoolean(info,null,false)
  return <>
  <article className='question'>
    <header>
      <h4>{title}</h4>
      <button onClick={setToggle}>
      {status ? <AiOutlineMinus/>:<AiOutlinePlus/>}
      </button>
    </header>
    <p>{answer}</p>
  </article>
  </>
}

export default SingleQuestions