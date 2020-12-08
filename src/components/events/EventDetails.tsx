import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEventById } from '../../services/eventApi';
import { RootStateType } from '../../types';
import eventDefault from './eventPlaceholder';
import './EventDetails.scss';
import { setEditEventId } from '../../actions/eventActions';

export default function EventDetails() {
  const [event, setEvent] = useState(eventDefault);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const id = useSelector(
    (state: RootStateType) => state.calendar.detailedEventId
  );
  // const username = useSelector((state: RootStateType) => state.auth.username);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    getEventById(`/api/v1/events/${id}`)
      .then((res) => setEvent(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [id]);

  function handleEdit(eventId: string | null | boolean) {
    dispatch(setEditEventId(eventId));
  }

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error while fetching event</h1>;
  return (
    <div id="detailedEvent">
      <h1>{event.name}</h1>
      <h3>Date: {event.date}</h3>
      <p>{event.description}</p>
      <button onClick={() => handleEdit(id)} type="button">
        Edit Event
      </button>
    </div>
  );
}
