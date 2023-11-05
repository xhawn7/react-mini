import Card from './components/Card'
import Loading from './components/Loading'
import Empty from './components/Empty'
import useFetch from './hooks/useFetch'

function App() {
  const endpoint = 'https://course-api.com/react-tours-project'
  const { data: cardData, setData, loading, fetchData } = useFetch(endpoint)
  const removeData = (id) => {
    const newCardData = cardData.filter((item) => item.id !== id)
    setData(newCardData)
  }
  if (loading) {
    return <Loading />    
  }
  if (cardData.length === 0) {
    return <Empty fetchData={() => fetchData(endpoint)} />
  }
  return (
    <main>
      <section>
        <div className="title">
          <h2>our tours</h2>
          <div className="underline"></div>
        </div>
        <div>
          {cardData.map((data) => {
            return <Card {...data} key={data.id} removeData={removeData} />
          })}
        </div>
      </section>
    </main>
  )
}

export default App
