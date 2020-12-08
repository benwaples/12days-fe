/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useDispatch } from 'react-redux';
import { getEvents, mungeEvents } from '../../services/eventApi';
import { MungedEvent } from '../../types';
import { setDetailedEventId } from '../../actions/eventActions';
import './Calendar.scss';
// import Snow from './Snow';

export default function Calendar() {
  const [events, setEvents] = useState<MungedEvent[]>([
    { id: '', title: '', start: '', url: '' },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const testEvents = [
    {
      id: 'a',
      title: 'my event',
      start: '2020-11-11',
      url: 'https://i.ibb.co/GQ9xdzy/12.png',
      // textColor: 'pink',
    },
    {
      id: 'b',
      title: 'my event',
      start: '2020-11-12',
      url: 'https://i.ibb.co/GQ9xdzy/12.png',
      // textColor: 'blue',
    },
  ];

  const renderEventImage = (eventInfo: {
    event: {
      _def: {
        publicId: string;
        title: string | null | undefined;
        url: string;
        id: string;
      };
    };
  }) => {
    // eslint-disable-next-line no-underscore-dangle
    const details = eventInfo?.event._def;
    return (
      <div id="event" onClick={(e) => e.preventDefault()}>
        <h2>{details.title}</h2>
        <img
          id="event-image"
          src={details.url}
          alt={details.title as string | undefined}
        />
        <button
          type="button"
          onClick={() => dispatch(setDetailedEventId(details.publicId))}
        >
          See More
        </button>
      </div>
    );
  };

  // eslint-disable-next-line func-names
  useEffect(() => {
    setLoading(true);
    getEvents()
      .then((res) => {
        const mungedRes = mungeEvents(res);
        return setEvents(mungedRes);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Erorr when fetching events</h1>;
  console.log(events);
  console.log(testEvents);

  return (
    <div>
      <h1 id="title">12 Days Event Calendar</h1>
      {/* <Snow /> */}
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventContent={renderEventImage}
      />
    </div>
  );
}
