import {useEffect,useState} from 'react'
const SingleColor = ({hex,index,weight}) => {
  const [alert,setAlert] = useState(false)
  useEffect(()=>{
    const alertTimeout = setTimeout(()=>{
      setAlert(false)
    },1000)
    return ()=>clearTimeout(alertTimeout)
  },[alert])
  return <article
    className={`color ${index > 10 && 'color-light'}`}
    style={{ backgroundColor: `#${hex}` }}
    onClick={() => {
      setAlert(true)
      navigator.clipboard.writeText(`#${hex}`)
    }}
    >
    <p className='percent-value'>{weight}%</p>
    <p className='color-value'>{hex}</p>
    {alert && <p className='alert'>copied to clipboard</p>}
    </article>
}

export default SingleColor