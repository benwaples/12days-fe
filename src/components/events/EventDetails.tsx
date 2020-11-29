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
    getEventById(`/api/v1/events/`);
    // then update state
  }, [id]);

  return (
    <div id="detailedEvent">
      <h1>Event</h1>
    </div>
  );
}
