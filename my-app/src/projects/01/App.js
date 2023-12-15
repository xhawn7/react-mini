// import logo from './logo.svg';
// import './App.css';
import Data from 'src/static/birthday-data.js'
import BirthdayList from 'src/components/BirthdayList.js';
import {useState} from 'react'
function App() {
  const [people,setPeople] = useState(Data)
  return (
    <main >
      <section className='container'>
        <h3>{people.length}个人生日</h3>
        <BirthdayList People={people}/>
        <button onClick = {() => setPeople([])}>清除所有</button>
      </section>
    </main>
  );
}

export default App;
