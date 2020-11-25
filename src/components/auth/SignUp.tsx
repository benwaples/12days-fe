import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { postSignUp } from '../../services/authApi'

export default function SignUp() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [userRole, setUserRole] = useState('HSD')
  const history = useHistory()
  
  const handleSubmit = async(event: { preventDefault: () => void }) => {
    event.preventDefault()

    const user = await postSignUp(username, password, userRole)

    if(user.status === 500) return alert('incorrect username/password')
    history.push('/calendar')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        placeholder="username"
        type="text"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <input 
        placeholder="password"
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
