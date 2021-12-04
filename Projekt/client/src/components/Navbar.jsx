import React from 'react'
import '../styles/Navbar.css'
import getAllCountdowns from '../utils/axios/Countdown'
const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className='menu-bar'>
          <li>CountDowns</li>
          <li>Trending</li>
          <li>Ending Soon</li>
          <li>Create</li>
          <li>Login</li>
          <li>Register</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
