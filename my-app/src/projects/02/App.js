import Card from 'src/components/Card.js'
import Loading from 'src/components/Loading.js'
import Empty from 'src/components/Empty.js'
import useFetch from 'src/hooks/useFetch.js'

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
