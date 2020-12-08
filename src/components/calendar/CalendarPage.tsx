import React from 'react';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../types';
import AddEvent from '../events/AddEvent';
import EditEvent from '../events/editEvent/EditEvent';
import EventDetails from '../events/EventDetails';
import Instructions from '../instructions/Instructions';
import Calendar from './Calendar';
import './Calendar.scss';
// import Snow from './Snow';

export default function CalendarPage(): JSX.Element {
  const detailsId = useSelector(
    (state: RootStateType) => state.calendar.detailedEventId
  );
  const editId = useSelector(
    (state: RootStateType) => state.calendar.editEventId
  );
  const username = useSelector((state: RootStateType) => state.auth.username);
  console.log(username, process.env.SECRET_USERNAME as string);

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
