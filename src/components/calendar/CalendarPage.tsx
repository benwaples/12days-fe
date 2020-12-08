import React from 'react';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../types';
import AddEvent from '../events/AddEvent';
import EditEvent from '../events/editEvent/EditEvent';
import EventDetails from '../events/EventDetails';
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
  const userRole = useSelector((state: RootStateType) => state.auth.username);

  return (
    <>
      <div id="dashboard">
        <div id="left">
          {detailsId ? <EventDetails /> : 'make an instrutions thing'}
          {editId && <EditEvent />}
        </div>
        <div id="calendarBox">
          <Calendar />
        </div>
        {/* <Snow /> */}
        {/* if user is emily display this otherwise display nothing */}
        {userRole === 'emily' && <AddEvent />}
        <AddEvent />
      </div>
    </>
  );
}
