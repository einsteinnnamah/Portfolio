import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Aboutme from './Pages/Aboutme'
import Errorpage from './Pages/Errorpage'
import Jamb from './Pages/Casestudies/Jamb'
function App() {
  return (
      <Router>
        <Routes>
          <Route path="*" element={<Errorpage />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path='/Aboutme' element={<Aboutme />}></Route>
          <Route exact path='/JambCasestudy' element={<Jamb />}></Route>
        </Routes>
      </Router>
  )
}

export default App
