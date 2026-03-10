import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Topics from './pages/Topics' 

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/topics" element={<Topics />} /> 
      </Routes>
    </div>
  )
}

export default App
