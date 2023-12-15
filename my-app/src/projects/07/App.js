import { useState,useEffect } from 'react'
import people from 'src/static/06-data.js'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const App = () => {
  const [index,setIndex] = useState(0)
  
  useEffect(()=>{
    console.log(index)
  },[index])
  return <>
    <section className="section">
      <div className="section-center">
        {
          people.map((item,selectedIndex) => {
            console.log(index)
            let position = 'nextSlide'
            if(selectedIndex === index){
              position = 'activeSlide'
            }
            if(selectedIndex === index-1){
              position = 'lastSlide'
            }
            return <article key={item.id} className={position}>
              <img src={item.image} alt={item.name} className="person-img" />
              <h4>{item.name}</h4>
            </article>
          })
        }
      <button onClick={() => setIndex(index - 1)} className='prev'>
        <FaChevronLeft/>
      </button>
      <button onClick={() => setIndex(index + 1)} className='next'><FaChevronRight/></button>

      </div>
    </section>
  </>
}

export default App