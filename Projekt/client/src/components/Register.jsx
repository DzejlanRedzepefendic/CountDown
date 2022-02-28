import React, { useState } from 'react'
import {Auth} from '../utils/axios/Auth'
import '../styles/Register.css'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [account, setAccount] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [password2, setPassword2] = useState('')
  const navigate = useNavigate()

  const checkAccount = async (e) => {
    e.preventDefault()
    if (account.password === password2) {
      return Auth(account, 'register').then((r)=> console.log(r))
    }
    console.log('Invalid cresidentials')
  }
  return (
    <div className='background'>
      <div className='register-box'>
        <h2>Register</h2>
        <form>
          <div className='user-box'>
            <input
              type='text'
              value={account.name}
              onChange={(e) => setAccount({ ...account, name: e.target.value })}
            />
            <label htmlFor=''>Full name</label>
          </div>
          <div className='user-box'>
            <input
              type='email'
              value={account.email}
              onChange={(e) =>
                setAccount({ ...account, email: e.target.value })
              }
            />
            <label htmlFor=''>Email</label>
          </div>
          <div className='user-box'>
            <input
              type='password'
              value={account.password}
              onChange={(e) =>
                setAccount({ ...account, password: e.target.value })
              }
            />
            <label htmlFor=''>Password</label>
          </div>
          <div className='user-box'>
            <input
              type='password'
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
            <label htmlFor=''>Re-enter password</label>
          </div>
          <div className='buttons-space'>
            <a to='#'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <p onClick={checkAccount}>Submit</p>
            </a>
            <a to='#'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <p onClick={()=> navigate('/login')}>login</p>
            </a>
          </div>
        </form>
        <a to='#'>
          <p>Already have an account?</p>
        </a>
      </div>
    </div>
  )
}

export default Register
