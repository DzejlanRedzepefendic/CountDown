import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import NoMatchPage from './components/NoMatchPage'
import Search from './components/Search'
import Countdown from './components/Countdown'
function App() {
  return (
    <>
      <Navbar />
      <Search />
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <NoMatchPage /> */}
      <Countdown />
    </>
  )
}

export default App
