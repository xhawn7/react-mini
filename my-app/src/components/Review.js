import {useState} from 'react'
import reviews from 'src/static/review-data.js'
import { limitedNumber } from 'src/hooks/useNumber.js';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const Review = () => {
  const [num,setNum]=useState(0)
  const {name, job, image, text} = reviews[num]
  const setIndex = (option) =>{
    setNum(oldNum=>{
      let newNum
      const random = Math.floor((Math.random()*reviews.length))
      switch(option){
        case 'prev':
          newNum = oldNum - 1
          break
        case 'next':
          newNum = oldNum + 1
          break;
        case 'random':
          if(random===oldNum){
            newNum = oldNum + 1
          }
          newNum = random
          break;
      }
      return limitedNumber(newNum,0,reviews.length-1,reviews.length-1,0)
    })
  }
  return (
    <article className='review'>
    <div className='img-container'>
      <img src={image} alt={name} className='person-img' />
      <span className='quote-icon'>
        <FaQuoteRight />
      </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <div className='button-container'>
      <button className='prev-btn' onClick={()=>setIndex('prev')}>
        <FaChevronLeft />
      </button>
      <button className='next-btn' onClick={()=>setIndex('next')}>
        <FaChevronRight />
      </button>
    </div>
    <button className='random-btn' onClick={()=>setIndex('random')}>
      surprise me
    </button>
  </article>
  )
}

export default Review