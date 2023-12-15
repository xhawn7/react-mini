import axios from 'axios'
import {createContext,useContext,useState} from 'react'
const FormCtx = createContext(null)

export const FormCtxProvider = ({children})=>{
  const [initing,setInitShow] = useState(true)
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(false)
  const [questions,setQuestions] = useState([])
  const [index,setIndex] = useState(0)
  const [correctNum,setCorrectNum] = useState(0)
  const [showModal,setShowModal] = useState(false)
  const fetchFormData = async (endpoint) => {
    setInitShow(false)
    setLoading(true)
    const res = await axios(endpoint).catch((err)=>console.log(err))
    if(res){
      const data = res.data.results
      if(data.length>0){
        setLoading(false)
        setQuestions(data)
      }else{
        setError(true)
      }
    }else{
      setInitShow(true)
    }
  }
  const submitInit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    const endpoint = `https://opentdb.com/api.php?amount=${formProps.amount}&difficulty=${formProps.difficulty}&category=${formProps.category}&type=multiple`
    fetchFormData(endpoint)
  }

  const handleNextQuestions = () => {
    if(index===questions.length-1){
      setShowModal(true)

    }else{
      setIndex(prev=>prev+1)
    }
  }

  const checkCorrect = (res) => {
    if(res){
      setCorrectNum(prev=>prev+1)
    }
    handleNextQuestions()
  }

  const playAgain = () => {
    setShowModal(false)
    setInitShow(true)
    setCorrectNum(0)
    setIndex(0)
  }
  return <FormCtx.Provider value={{initing,
    loading,
    submitInit,
    questions,
    error,
    index,
    showModal,
    handleNextQuestions,
    correctNum,
    checkCorrect,
    playAgain
  }}>{children}</FormCtx.Provider>
}

export const useFormCtx = () => useContext(FormCtx)