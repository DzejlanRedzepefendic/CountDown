import React from 'react'
import '../styles/Navbar.css'
import getAllCountdowns from '../utils/axios/Countdown'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className='menu-bar'>
          <Link to='/' ><li >CountDowns</li></Link>
          <Link to='/' ><li>Trending</li></Link>
          <Link to='/' ><li>Ending Soon</li></Link>
          <Link to='/' ><li>Create</li></Link>
          <Link to='/login'><li>Login</li></Link>
          <Link to='/register'><li>Register</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
