import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'

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
    <div>
      Auth component
      {
        !isNewUser ? <SignUp /> : <Login />
      }
      <button onClick={() => toggle()}>New User?</button>
    </div>
  )
}
