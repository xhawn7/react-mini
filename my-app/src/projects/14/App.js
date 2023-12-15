// import Home from 'src/projects/14/Home.js'
import {
  // createBrowserRouter,
  // RouterProvider,
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";

import NavBar from './Components/Navbar';
import Home from './Pages/Home';
import Error from './Pages/Error';
import About from './Pages/About';
import Detail from './Pages/Detail';
const App = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home/>,
  //   },
  //   {
  //     path: "/about",
  //     element: <About/>,
  //   },
  //   {
  //     path: "*",
  //     element: <Error/>,
  //   },
  //   {
  //     path: "/detail/:id",
  //     element: <Detail />,
  //   },
  // ]);
  return <>
    <main>
      {/* <Home/> */}
      <Router>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='detail/:id' element={<Detail />} />
      <Route path='*' element={<Error />} />
      </Routes>
      </Router>
      {/* <RouterProvider router={router} /> */}
    </main>
  </>
}

export default App