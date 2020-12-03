import { resolve } from 'path';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getEventById } from '../../services/eventApi';
import { RootStateType } from '../../types';
import eventDefault from './eventPlaceholder';

export default function EventDetails() {
  const [event, setEvent] = useState(eventDefault);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const id = useSelector(
    (state: RootStateType) => state.calendar.detailedEventId
  );

  useEffect(() => {
    setLoading(true);
    getEventById(`/api/v1/events/${id}`)
      .then((res) => setEvent(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error while fetching event</h1>;
  return (
    <div id="detailedEvent">
      <h3>{event.name}</h3>
    </div>
  );
}
