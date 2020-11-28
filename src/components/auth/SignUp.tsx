import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postSignUp } from '../../services/authApi';

export default function SignUp(): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('HSD');
  const history = useHistory();
  const dispatch = useDispatch();

  // eslint-disable-next-line consistent-return
  async function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();

    const user = await postSignUp(username, password, userRole);

    // change the alert to custom UI element that notifies user
    // eslint-disable-next-line no-alert
    if (user.status === 500) return alert('incorrect username/password');

    dispatch(setUsername(user.username));
    dispatch(setUsername(user.userRole));
    history.push('/calendar');
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
      <button type="submit">Sign Up</button>
    </form>
  );
}
