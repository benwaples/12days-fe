import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { renderEventImage } from '../../utils/calendarUtils';

export default function Calendar() {
  const events = [
    {
      id: 'a',
      title: 'my event',
      start: '2020-11-11',
      url: 'https://i.ibb.co/GQ9xdzy/12.png',
      textColor: 'pink',
    },
    {
      id: 'b',
      title: 'my event',
      start: '2020-11-12',
      url: 'https://i.ibb.co/GQ9xdzy/12.png',
      textColor: 'blue',
    },
  ];

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventContent={renderEventImage}
      />
    </div>
  );
}
