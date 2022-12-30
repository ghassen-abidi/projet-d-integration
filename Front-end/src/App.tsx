import { Profiler, useState } from 'react'
import { Navbar } from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './routes/Login'
import Signup from './routes/Signup'
import Home from './routes/Home'
import Dashbored from './routes/Dashbored'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Router>

      <Navbar 
      links={[
        { label: "Home", link: 'world'},
        {label:"event", link: "event",links:[
          {label: "old events", link: 'world'} ,
          {label: "current events", link: 'world'} ,
        ]}
      ]}
     />
      
        <Routes>

          <Route path="/home"  element={<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>}  />
          <Route path="/Dashbored"  element={<Dashbored />}/>
          <Route path="/event/old"  />
          <Route path="/event/current"  />

        
      </Routes>
      </Router>

    </div>
  )
}

export default App
