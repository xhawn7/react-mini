
import { useState, useEffect } from "react"
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const App = () => {
  const [content, setContent] = useState(null)
  const [name, setName] = useState('')
  const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'
  let endpoint = 'https://randomuser.me/api/'
  const getData = async () => {
    const response = await fetch(endpoint)
    const data = await response.json()
    const person = data.results[0]
    const {
      name: { first, last },
      dob: { age },
      email, phone,
      login: { password },
      location: { street: { name, number } },
      picture:{large:image}
    } = person
    const newPerson = {
      name: `${first} ${last}`,
      email,
      age,
      street: `${name} ${number}`,
      phone,
      password,
      image
    }
    setContent(newPerson)
    setName(newPerson['name'])
    setVal('name')
  }
  useEffect(() => {
    getData()
  }, [])
  const info = [
    { iconName: 'name', icon: <FaUser /> },
    { iconName: 'email', icon: <FaEnvelopeOpen /> },
    { iconName: 'age', icon: <FaCalendarTimes /> },
    { iconName: 'street', icon: <FaMap /> },
    { iconName: 'phone', icon: <FaPhone /> },
    { iconName: 'password', icon: <FaLock /> }
  ]
  const [val, setVal] = useState('name')
  const handleHover = (name) => {
    setVal(name)
  }
  return <>
    <main>
      <div className='block bcg-black'></div>
      <div className='block'>
        <div className='container'>
          <img
            src={content?.image || defaultImage}
            alt='random user'
            className='user-img'
          />
          <p className='user-title'>My {val} is</p>
          <p className='user-value'>
            { content?.[val] || name}
          </p>
          <div className='values-list'>
            {
              info.map(item => 
                <button
                  className='icon'
                  data-label={item.iconName}
                  onMouseEnter={()=>handleHover(item.iconName)}
                >
                  {item.icon}
                </button>
              )
            }
          </div>
          <button onClick={getData} className='btn' type='button'>random user</button>
        </div>
      </div>
    </main>
  </>
}

export default App