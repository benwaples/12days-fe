import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { postLogin } from '../../services/authApi'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  
  const handleSubmit = async(event: { preventDefault: () => void }) => {
    event.preventDefault()
    const user = await postLogin(username, password)
    if(user.status === 500) return alert('incorrect username/password')
    history.push('/calendar')
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
      <button>Sign Up</button>
    </form>
  )
}
