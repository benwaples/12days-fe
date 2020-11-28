import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

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

  const renderEventImage = (eventInfo: {
    event: { _def: { title: {} | null | undefined; url: string } };
  }) => {
    console.log(eventInfo, 'event info');
    return (
      <div id="event">
        <img
          id="event-image"
          src={eventInfo.event._def.url as string}
          alt={eventInfo.event._def.title as string}
        />
        <h2>{eventInfo.event._def.title}</h2>
      </div>
    );
  };

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
