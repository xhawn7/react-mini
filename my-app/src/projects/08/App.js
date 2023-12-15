import text from 'src/static/08-data.js'
import {useState,useEffect} from 'react'
import {limitedNumber} from 'src/hooks/useNumber.js'
const App = () => {
  const [index,setIndex] = useState(0)
  const [data,setData] = useState(text.slice(0,1))
  const handleSubmit = (e) =>{
    e.preventDefault()
    setData(text.slice(0,limitedNumber(index,0,8,1,8)))
  }
  return <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      {/* <form className='lorem-form' onSubmit={handleSubmit}> */}
        <label htmlFor='amount'>paragraphs:</label>
        <input 
          type='number'
          value={index} 
          name='amount'
          id='amount'
          onChange={(e)=>setIndex(parseInt(e.target.value))}
        />
      {/* <button onClick = {()=>setIndex(index+1,)}>+</button>
      <button onClick = {()=>setIndex(index-1)}>-</button> */}
      <button className='btn' onClick={()=>setData(text.slice(0,limitedNumber(index,0,8,1,8)))}>generate</button>
      {/* </form> */}
      <article className='lorem-text'>
        {
        data.map((item,index)=>{
          return <p key={index}>{item}</p>
        })
        }
      </article>
    </section>
}

export default App