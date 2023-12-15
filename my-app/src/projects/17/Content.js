import {chunk} from 'src/hooks/useNumber'
const Content = ({num,data}) => {
  
  const newData = chunk(data,10)
  const content = newData?.filter((_,index)=>index===num-1)[0]
  return <div className='container'>
    { 
      content?.map(item=>(
      <article className='card'>
        <img src={item.avatar_url} alt={item.login} />
        <h4>${item.login}</h4>
        <a href={item.html_url} className='btn'>
          view profile
        </a>
      </article>
      ))
    }
  </div>
}

export default Content
