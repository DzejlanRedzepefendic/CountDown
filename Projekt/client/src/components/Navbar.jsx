import React from 'react'
import getAllCountdowns from '../utils/axios/Countdown'
const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
          <div>
            <a href='#'>CountDown</a>
          </div>
          <ul>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Page 1</a>
            </li>
            <li>
              <a href='#'>Page 2</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href='#'>
                <span></span> Sign Up
              </a>
            </li>
            <li>
              <a href='#'>
                <span></span> Login
              </a>
            </li>
            <button
              onClick={() => {
                getAllCountdowns()
              }}
            >
              Click me
            </button>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
