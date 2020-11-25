import React, { useState } from 'react'
import { postSignUp } from '../../services/authApi'

export default function SignUp() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [userRole, setUserRole] = useState('HSD')
  
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()

    postSignUp(username, password, userRole)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <input 
        type="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      Department
      <select 
        value={userRole} 
        onChange={({ target }) => setUserRole(target.value)}
      >
        <option value="SOD">Santa Operations</option>
        <option value="TOD">Tech</option>
        <option value="HSD">Health and Safety </option>
      </select>
      <button>Sign Up</button>
    </form>
  )
}
