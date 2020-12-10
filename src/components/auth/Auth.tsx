import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import './auth.scss';
import './MobileAuth.scss';

export default function Auth(): JSX.Element {
  const [isNewUser, setIsNewUser] = useState(false);

  const toggle = () => {
    if (isNewUser) {
      setIsNewUser(false);
    } else {
      setIsNewUser(true);
    }
  };

  return (
    <div id="auth">
      <h2>{isNewUser ? 'Sign up' : 'Login'}</h2>
      {isNewUser ? <SignUp /> : <Login />}
      <button
        type="submit"
        id="toggle"
        onKeyDown={() => toggle()}
        onClick={() => toggle()}
      >
        {isNewUser ? 'Logging In?' : 'New User?'}
      </button>
    </div>
  );
}
