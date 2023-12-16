import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Errorpage from './Pages/Errorpage'
function App() {
  return (
      <Router>
        <Routes>
          <Route path="*" element={<Errorpage />}></Route>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </Router>
  )
}

export default App
