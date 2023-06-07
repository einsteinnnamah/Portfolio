import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Aboutme from './Pages/Aboutme'
import Errorpage from './Pages/Errorpage'
import Jamb from './Pages/Casestudies/Jamb'

import Articles from './Pages/Articles'
import Edtech from './Pages/Casestudies/Edtech'
import Googlemeet from './Pages/Casestudies/Googlemeet'
function App() {
  return (
      <Router>
        <Routes>
          <Route path="*" element={<Errorpage />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path='/Aboutme' element={<Aboutme />}></Route>
          <Route exact path='/Works/Jamb' element={<Jamb />}></Route>
          <Route exact path='/Works/Googlemeet' element={<Googlemeet />}></Route>
          <Route exact path='/Works/Edtech' element={<Edtech />}></Route>
          <Route exact path='Articles' element={<Articles />}></Route>
        </Routes>
      </Router>
  )
}

export default App
