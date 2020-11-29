import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  setUsernameAction,
  setUserRoleAction,
} from '../../actions/authActions';
import { postLogin } from '../../services/authApi';

export default function Login(): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  // eslint-disable-next-line consistent-return
  async function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();

    const user = await postLogin(username, password);

    if (user.status === 500) return alert('incorrect username/password');
    history.push('/calendar');

    dispatch(setUserRoleAction(user.userRole));
    dispatch(setUsernameAction(user.username));
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
      <button type="submit">Login</button>
    </form>
  );
}
