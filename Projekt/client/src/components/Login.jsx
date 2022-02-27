import React, { useState } from 'react'
import { Auth } from '../utils/axios/Auth'
import '../styles/Login.css'

export const Login = () => {
  const [account, setAccount] = useState({ email: '', password: '' })
  const checkAccount = (e) => {
    e.preventDefault()
    Auth(account,'login').then((r)=> console.log(r))
  }
  return (
    <div className='background'>
      <div className='login-box'>
        <h2>LOGIN</h2>
        <form>
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
          {/* <button onClick={checkAccount}>submit</button> */}
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
              <p>register</p>
            </a>
          </div>
        </form>
        <a to='#'>
          <p>Don't have account?</p>
        </a>
      </div>
    </div>
  )
}

export default Login
