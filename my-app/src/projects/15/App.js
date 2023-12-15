import {useState} from 'react'
import Markdown from 'react-markdown'

const App = () => {
  const [val,setVal] = useState('')
  return <>
    <main>
      <section className='markdown'>
        <textarea className='input' value={val} onChange={(e)=>setVal(e.target.value)} />
        <article className='result'>
          <Markdown>{val}</Markdown>
        </article>
      </section>
    </main>
  </>
}

export default App