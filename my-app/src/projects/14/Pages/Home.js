import { useEffect, useState, useRef } from "react"
import List from "src/projects/14/Components/List.js";

const Home = () => {
  const [kw,setKw] = useState('')
  const inputRef = useRef(null)
  useEffect(()=>{
    inputRef.current.focus()
  },[])
  return <>
  <section className='section search'>
    <form className='search-form' onSubmit={(e)=>e.preventDefault()}>
      <div className='form-control'>
        <label htmlFor='name'>search your favorite cocktail</label>
        <input type="text" value={kw} onChange={(e)=>setKw(e.target.value)} ref={inputRef} name='name'id='name'/>
      </div>
    </form>
  </section>
  <List kw={kw}/>
  </>
}

export default Home