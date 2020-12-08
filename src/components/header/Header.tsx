import React from 'react';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../types';
import './Header.scss';

export default function Header() {
  const username = useSelector((state: RootStateType) => state.auth.username);
  let userRole = useSelector((state: RootStateType) => state.auth.userRole);

  if (userRole === 'HSD') {
    userRole = 'Health and Safety Department';
  } else if (userRole === 'TOD') {
    userRole = 'Tech Operations Department';
  } else if (userRole === 'SOD') {
    userRole = 'Santa Operations Department';
  }
  return (
    <header>
      <div />
      <h1>12 Days of Christmas</h1>
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
    </header>
  );
}
