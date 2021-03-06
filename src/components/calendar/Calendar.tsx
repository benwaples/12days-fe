/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useDispatch, useSelector } from 'react-redux';
import { isMobile } from 'react-device-detect';
import { getEvents, mungeEvents } from '../../services/eventApi';
import { MungedEvent, RootStateType } from '../../types';
import {
  setDetailedEventId,
  setUpdateCalendar,
} from '../../actions/eventActions';
import './Calendar.scss';

export default function Calendar() {
  const [events, setEvents] = useState<MungedEvent[]>([
    { id: '', title: '', start: '', url: '' },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const updateCalendar = useSelector(
    (state: RootStateType) => state.calendar.updateCalendar
  );

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
        <div className={`container ${isMobile && 'mobile'}`}>
          <div className="hidden-title">
            <h2>{details.title}</h2>
          </div>
          <img
            id="event-image"
            src={details.url}
            alt={details.title as string | undefined}
          />
        </div>
        <button
          type="button"
          onClick={() => dispatch(setDetailedEventId(details.publicId))}
        >
          {isMobile ? 'Info' : 'See More'}
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
      .finally(() => {
        setLoading(false);
        return dispatch(setUpdateCalendar(false));
      });
  }, [updateCalendar]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Erorr when fetching events</h1>;

  return (
    <div>
      <h1 id="title">Event Calendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView={isMobile ? 'dayGridMonth' : 'dayGridMonth'}
        events={events}
        eventContent={renderEventImage}
      />
    </div>
  );
}
