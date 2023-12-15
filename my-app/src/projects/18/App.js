import { useState,useEffect } from "react"
const getTheme = () =>{
  let theme = 'light-theme'
  if(localStorage.getItem('theme')){
    theme = localStorage.getItem('theme')
  }
  return theme
}
const App = () => {
  const [theme,setTheme] = useState(getTheme())
  useEffect(()=>{
    document.documentElement.className = theme
    localStorage.setItem('theme',theme)
  },[theme])
  const handleTheme = () => {
    if(theme === 'light-theme'){
      setTheme('dark-theme')
    }else{
      setTheme('light-theme')
    }
  }
  return <>
    <main>
      <div className="nav-center">
          <h1>Theme change</h1>
          <button className="btn" onClick={handleTheme}>
            toggle
          </button>
        </div>
    </main>
  </>
}

export default App