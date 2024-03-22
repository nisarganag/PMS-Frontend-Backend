import React from 'react'
import Login from './LoginData'
import './Login.css'

const LoginMain = () => {
  return (
    <div className='container-design'>
      <div className='login-message'>
        <h1>  Hello there, How you doing </h1>
      </div>
      <Login/>
    </div>
  )
}

export default LoginMain
