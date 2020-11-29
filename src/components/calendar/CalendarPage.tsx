import React from 'react';
import Calendar from './Calendar';
import './Calendar.scss'

export default function CalendarPage(): JSX.Element {

  return (
    <>
      <div id="calendarBox">
        <Calendar />
      </div>
    </>
  );
}
