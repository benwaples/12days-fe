import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import './auth.scss'

export default function Auth() {
  const [isNewUser, setIsNewUser] = useState(false)

  const toggle = () => {
    if(isNewUser) {
      setIsNewUser(false)
    } else {
      setIsNewUser(true)
    }
  }

  return (
    <div id="auth">
      <h2>{
        isNewUser ? 'Sign up' : 'Login'
      }</h2>
      {
        isNewUser ? <SignUp /> : <Login />
      }
      <p id="toggle" onClick={() => toggle()}>{isNewUser ? 'Logging In?' : 'New User?'}</p>
    </div>
  )
}
