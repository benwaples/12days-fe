import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  setUsernameAction,
  setUserRoleAction,
} from '../../actions/authActions';
import { RootStateType } from '../../types';
import './Header.scss';

export default function Header() {
  const username = useSelector((state: RootStateType) => state.auth.username);
  let userRole = useSelector((state: RootStateType) => state.auth.userRole);
  const history = useHistory();
  const dispatch = useDispatch();

  if (userRole === 'HSD') {
    userRole = 'Health and Safety Department';
  } else if (userRole === 'TOD') {
    userRole = 'Tech Operations Department';
  } else if (userRole === 'SOD') {
    userRole = 'Santa Operations Department';
  }

  function handleLogOut() {
    dispatch(setUsernameAction(''));
    dispatch(setUserRoleAction(''));
    history.push('/');
  }
  return (
    <header>
      {username ? (
        <button onClick={handleLogOut} id="logout" type="button">
          Log Out
        </button>
      ) : (
        <div />
      )}
      <h1>12 Days of Christmas</h1>
      {username ? (
        <div className="welcome">
          <h2>
            Welcome,{' '}
            <strong>
              <span>{username}</span>
            </strong>
          </h2>
          <h3>
            from the{' '}
            <strong>
              <span>{userRole}</span>
            </strong>
          </h3>
        </div>
      ) : (
        ''
      )}
    </header>
  );
}
