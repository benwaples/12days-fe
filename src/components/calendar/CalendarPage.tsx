import React from 'react';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../types';
import AddEvent from '../events/AddEvent';
import EventDetails from '../events/EventDetails';
import Calendar from './Calendar';
import './Calendar.scss';

export default function CalendarPage(): JSX.Element {
  const id = useSelector(
    (state: RootStateType) => state.calendar.detailedEventId
  );
  return (
    <>
      <div id="calendarBox">
        {id && <EventDetails />}
        <Calendar />
      </div>
      <AddEvent />
    </>
  );
}
