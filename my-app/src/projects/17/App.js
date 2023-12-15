
import { useState } from "react"
import Content from "./Content"
import Page from "./Page"
import useFetch from "src/hooks/useFetch"

const App = () => {
  const [num,setNum] = useState(1)
  const endpoint = 'https://api.github.com/users/john-smilga/followers?per_page=100'
  const {data,loading} = useFetch(endpoint)
  return <>
    <main>
      <div className='section-title'>
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <Content num={num} data={data}/>
        <Page num={num} setNum={setNum}/>
      </section>
    </main>
  </>
}

export default App