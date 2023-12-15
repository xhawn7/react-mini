import {useState,useEffect} from 'react'
const useFetch = (url) => {
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(false)
  const fetchData = async (url) => {
    setLoading(true)
    try{
      const json_data = await fetch(url)
      const res = await json_data.json()
      setLoading(false)
      setData(res)
    }catch(err){
      setLoading(false)
      console.log(err)
    }
  }
  useEffect(()=>{
    fetchData(url)
  },[url])

  return {
    data,
    setData,
    loading,
    fetchData
  }
}

export default useFetch
