import React from 'react';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../types';
// import AddEvent from '../events/AddEvent';
import EventDetails from '../events/EventDetails';
import Calendar from './Calendar';
import './Calendar.scss';
// import Snow from './Snow';

export default function CalendarPage(): JSX.Element {
  const id = useSelector(
    (state: RootStateType) => state.calendar.detailedEventId
  );
  return (
    <>
      <div id="dashboard">
        {id ? <EventDetails /> : 'make an instrutions thing'}
        <div id="calendarBox">
          <Calendar />
        </div>
        {/* <Snow /> */}
        {/* if user is emily display this otherwise display nothing */}
        {/* <AddEvent /> */}
      </div>
    </>
  );
}
