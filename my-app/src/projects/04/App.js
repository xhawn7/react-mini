import SingleQuestions from 'src/components/SingleQuestions.js'
import questions from 'src/static/questions-data.js'
const App = () => {
  return <>
    <main>
        <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
        {questions.map(item=>{
          return <SingleQuestions {...item} key={item.id}/>
        })}
        </section>
      </div>
    </main>
  </>
}

export default App