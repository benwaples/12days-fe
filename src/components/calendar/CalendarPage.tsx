import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  setUsernameAction,
  setUserRoleAction,
} from '../../actions/authActions';
import { verify } from '../../services/authApi';
import { RootStateType } from '../../types';
import AddEvent from '../events/AddEvent';
import EditEvent from '../events/editEvent/EditEvent';
import EventDetails from '../events/EventDetails';
import Instructions from '../instructions/Instructions';
import Calendar from './Calendar';
import './Calendar.scss';
import './MobileCalendar.scss';

export default function CalendarPage(): JSX.Element {
  const detailsId = useSelector(
    (state: RootStateType) => state.calendar.detailedEventId
  );
  const editId = useSelector(
    (state: RootStateType) => state.calendar.editEventId
  );
  const username = useSelector((state: RootStateType) => state.auth.username);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    verify().then((res) => {
      if (res.status === 500) return history.push('/');
      dispatch(setUsernameAction(res.username));
      dispatch(setUserRoleAction(res.userRole));
      return res;
    });
  });

  return (
    <>
      <div id="dashboard">
        <div id="left">
          {detailsId ? <EventDetails /> : <Instructions />}
          {editId && <EditEvent />}
        </div>
        <div id="calendarBox">
          <Calendar />
        </div>
        {/* <Snow /> */}
        {/* if user is emily display this otherwise display nothing */}
        {username === 'emily' && <AddEvent />}
      </div>
    </>
  );
}
