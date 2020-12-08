import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from '../../../types';
import {
  deleteEvent,
  getEventById,
  patchEvent,
} from '../../../services/eventApi';
import {
  setDetailedEventId,
  setEditEventId,
  setUpdateCalendar,
} from '../../../actions/eventActions';
import './EditEvent.scss';

export default function AddEvent(): JSX.Element {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const editEventId = useSelector(
    (state: RootStateType) => state.calendar.editEventId
  );

  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    getEventById(`/api/v1/events/${editEventId}`)
      .then((res) => {
        setName(res.name);
        setDescription(res.description);
        setImage(res.image);
        setDate(res.date);
        return res;
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [editEventId]);

  async function handleDelete(deleteId: string | null | boolean) {
    await deleteEvent(deleteId);
    dispatch(setEditEventId(null));
    dispatch(setDetailedEventId(null));
    dispatch(setUpdateCalendar(true));
    history.push('/calendar');
  }

  async function handleEdit(event: { preventDefault: () => void }) {
    event.preventDefault();

    await patchEvent(editEventId, { id: '', name, description, image, date });
    dispatch(setEditEventId(null));
    dispatch(setDetailedEventId(null));
    dispatch(setUpdateCalendar(true));
  }

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error getting event</h1>;

  return (
    <div id="add-event" className="edit">
      <form onSubmit={handleEdit}>
        <button
          id="backout"
          onClick={() => dispatch(setEditEventId(null))}
          type="button"
        >
          X
        </button>
        <input
          placeholder="Name"
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />
        <input
          placeholder="Image URL"
          type="text"
          value={image}
          onChange={({ target }) => setImage(target.value)}
        />
        <input
          placeholder="Date"
          type="date"
          value={date}
          onChange={({ target }) => setDate(target.value)}
        />
        <button type="submit">Edit Event</button>
        <button onClick={() => handleDelete(editEventId)} type="button">
          DELETE
        </button>
      </form>
    </div>
  );
}
