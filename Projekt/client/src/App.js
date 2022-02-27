import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import NoMatchPage from './components/NoMatchPage'
import Search from './components/Search'
import Countdown from './components/Countdown'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Search />
        <Routes>
          <Route path='/' element={<Countdown />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='*' element={<NoMatchPage />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
