
const Empty = ({fetchData}) => {
  return (
    <main>
      <div className='title'>
        <h2>no tours left</h2>
        <button className='btn' onClick={() => fetchData()}>
          refresh
        </button>
      </div>
    </main>
    
  )
}

export default Empty