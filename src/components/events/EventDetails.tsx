import { resolve } from 'path';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getEventById } from '../../services/eventApi';
import { RootStateType } from '../../types';

export default function EventDetails() {
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const id = useSelector(
    (state: RootStateType) => state.calendar.detailedEventId
  );

  useEffect(() => {
    setLoading(true);
    getEventById(`/api/v1/events/`)
      .then((res) => setEvent(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div id="detailedEvent">
      <h1>Event</h1>
    </div>
  );
}
