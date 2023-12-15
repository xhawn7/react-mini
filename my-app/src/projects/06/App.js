// import fetchData from "src/hooks/fetchData"
import { useState } from "react"
import { FaAngleDoubleRight } from 'react-icons/fa'
import useFetch from "src/hooks/useFetch"
import Loading from "src/components/Loading"
const App = () => {
  const endpoint = 'https://course-api.com/react-tabs-project'
  const {data,loading} = useFetch(endpoint)
  const [selectedIndex,setSelectedIndex] = useState(0)
 
  if(loading){
    return <Loading/>
  }
  const emptyData = {company:'', dates:'', duties:[], title:''}
  const {company,title,dates,duties} = data[selectedIndex] || emptyData

  return <section className="section">
    <div className="title">
      <h2>experience</h2>
      <div className="underline"></div>
    </div>
    <div className="jobs-center">
        <div className="btn-container">
          {data.map((item,index) => 
            <button onClick={()=>setSelectedIndex(index)} key={item.id} className={`job-btn ${index === selectedIndex && 'active-btn'}`}>
              {item.company}
            </button>
          )}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
    </div>
    <button type="button" className="btn">
      more info
    </button>
    </section>
}

export default App