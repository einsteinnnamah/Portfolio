import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Errorpage from './Pages/Errorpage'
import Swapgo from './Pages/Swapgo'
function App() {
  return (
      <Router>
        <Routes>
          <Route path="*" element={<Errorpage />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Swapgo" element={<Swapgo />}></Route>
        </Routes>
      </Router>
  )
}

export default App
