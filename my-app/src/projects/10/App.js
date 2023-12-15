import {useState,useEffect} from 'react'
import Alert from 'src/components/Alert.js'
import List from 'src/components/List.js'
const App = () => {

  const getLocalStorage = () =>{
    if(localStorage.getItem('list')){
      return JSON.parse(localStorage.getItem('list'))
    }else{
      return []
    }
  }

  const [title,setTitle] = useState('')
  const [editId,setEditId] = useState()
  const [isEdit,setIsEdit] = useState(false)
  const [list,setList] = useState(getLocalStorage())
  const [tips,setTips] = useState({isShow:false,type:'',body:''})
  
  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list))
  },[JSON.stringify(list)])

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(title.length===0){
      showTips(true, 'danger', 'please enter value');
      return
    }
    if(isEdit){
      const newObject = {id:editId,title}
      const index = list.findIndex((item)=>item.id === newObject.id)
      list.splice(index,1,newObject)
      setList(list)
      setTitle('')
      setIsEdit(false)
      showTips(true, 'success', 'value changed')
      return 
    }
    const nowId = + new Date()
    const newList =[{id:nowId,title}]
    setList(prev=>[...newList,...prev])
    setTitle('')
    showTips(true, 'success', 'item added to the list')
  }

  const showTips = (isShow=false,type='',body='') =>[
    setTips({isShow,type,body})
  ]

  const edit = (title,id) => {
    setIsEdit(true)
    setTitle(title)
    setEditId(id)
  }

  const deleteItem = (id) => {
    const newList = list.filter(item=>item.id !== id)
    setList(newList)
    showTips(true, 'danger', 'item removed')
  }

  const removeItems = () => {
    setList([])
    showTips(true, 'danger', 'empty list')
  }
  
  return <section className='section-center'>
    <form className='grocery-form' onSubmit={handleSubmit}>
      {tips.isShow && <Alert {...tips} showTips={showTips} />}
      <h3>grocery bud</h3>
      <div className='form-control'>
        <input type="text" className='grocery' value={title} onChange={e=>setTitle(e.target.value)}/>
        <button type='submit' className='submit-btn'>{isEdit?'edit':'submit'}</button>
      </div>
    </form>
    { 
      list.length > 0 && (
        <div className='grocery-container'>
            <List list={list} edit={edit} deleteItem={deleteItem}/>
            <button onClick={removeItems} className='clear-btn'>clear all</button>
        </div>
      )
    }  
    </section>
}

export default App