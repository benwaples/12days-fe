import React from 'react';
import EventDetails from '../events/EventDetails';
import Calendar from './Calendar';
import './Calendar.scss'

export default function CalendarPage(): JSX.Element {

  return (
    <>
      <div id="calendarBox">
        <EventDetails />
        <Calendar />
      </div>
    </>
  );
}
