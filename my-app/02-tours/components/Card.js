import useBoolean from '../hooks/useBoolean'
const Card = ({image,name,price,info,id,removeData}) => {
  // const {image,name,price,info,id} = cardData
  const content = 
  {
    trueInfo:{
      btn:'Show Less',
      detail: info
    },
    falseInfo:{
      btn:'Read More',
      detail:info.slice(0,180)
    }
  }
  const {trueInfo,falseInfo} = content
  const {info:doc,setToggle} = useBoolean(trueInfo, falseInfo,false)
  const {btn,detail} = doc
  return(
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {detail}
          <button onClick = {setToggle}>{btn}</button>
        </p>
        <button className="delete-btn" onClick={() => removeData(id)}>
          没兴趣
        </button>
      </footer>
    </article>
  )
}

export default Card