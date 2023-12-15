import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({list,edit,deleteItem}) => {
  return (
  <div className='grocery-list'>
    {
      list?.map(item=>{
        const {title,id} = item
        return <article className='grocery-item' key={id}>
                      <p className='title'>{title}</p>
            <div className='btn-container'>
              <button
                type='button'
                className='edit-btn'
                onClick={()=>edit(title,id)}
              >
                <FaEdit />
              </button>
              <button
                type='button'
                className='delete-btn'
                onClick={()=>deleteItem(id)}
              >
                <FaTrash />
              </button> 
            </div>       
          </article>})
    }
  </div>
  )
}

export default List