import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Aboutme from './Pages/Aboutme'
import Errorpage from './Pages/Errorpage'
import Jamb from './Pages/Casestudies/Jamb'
import Arteshots from './Pages/Casestudies/Arteshots'
function App() {
  return (
      <Router>
        <Routes>
          <Route path="*" element={<Errorpage />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path='/Aboutme' element={<Aboutme />}></Route>
          <Route exact path='/Jamb' element={<Jamb />}></Route>
          <Route exact path='/Arteshots' element={<Arteshots />}></Route>
        </Routes>
      </Router>
  )
}

export default App
