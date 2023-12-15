import {limitedNumber} from 'src/hooks/useNumber'
const Page = ({num,setNum}) => {
  const numArr = Array(10).fill(undefined).map((item,index)=>index+1)
  const handleClick = (e) => {
    setNum(Number(e.target.innerText))
  }
  return <div className='btn-container'>
    <div onClick={()=>setNum(prev=>limitedNumber(prev-1,1,10,1,10))} className='prev-btn'>prev</div>
    {
      numArr.map((item,index)=>
        // <div onClick={handleClick} >
        //     {item}
        // </div>
        <button
        key={index}
        className={`page-btn ${item === num ? 'active-btn' : null}`}
        onClick={handleClick}
      >
        {item}
      </button>
      )
    }
    <div onClick={()=>setNum(prev=>limitedNumber(prev+1,1,10,1,10))} className='next-btn'>next</div>
  </div>
}

export default Page
