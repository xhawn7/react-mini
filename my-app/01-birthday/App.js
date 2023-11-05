// import logo from './logo.svg';
// import './App.css';
import Data from './data'
import List from './List';
import {useState} from 'react'
function App() {
  const [people,setPeople] = useState(Data)
  return (
    <main >
      <section className='container'>
        <h3>{people.length}个人生日</h3>
        <List People={people}/>
        <button onClick = {() => setPeople([])}>清除所有</button>
      </section>
    </main>
  );
}

export default App;
