import Review from 'src/components/Review.js'
const App = () => {
  return <>
    <main>
      <section className='container'>
        <div className='title'>
          <h2>our reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </main>
  </>
}

export default App