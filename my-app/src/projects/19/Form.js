
import { useFormCtx } from "./FormCtx"
import Modal from './Modal'
const Form = () => {
  const {questions,index,handleNextQuestions,correctNum,checkCorrect} = useFormCtx()
  const {correct_answer,incorrect_answers,question} = questions[index]
  const quiz = [...incorrect_answers,correct_answer]
  quiz.sort(()=>0.5-Math.random())
  return <main>
  <Modal/>
  <section className='quiz'>
    <p className='correct-answers'>Correct Answers : {correctNum}/{index}</p>
    <article className='container'>
      <h2>{question}</h2>
      <div className='btn-container'>
        {
          quiz.map((item,index)=><button onClick={()=>checkCorrect(item===correct_answer)} key={index} className='answer-btn'>{item}</button>)
        }
      </div>
    </article>
    <button className='next-question' onClick={handleNextQuestions}>
      next question
    </button>
  </section>
  </main>
}

export default Form