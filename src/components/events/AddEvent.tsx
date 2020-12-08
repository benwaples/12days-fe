import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUpdateCalendar } from '../../actions/eventActions';
import { addEvent } from '../../services/eventApi';
import './AddEvent.scss';

export default function AddEvent(): JSX.Element {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    await addEvent(name, description, image, date);

    dispatch(setUpdateCalendar(true));
  };

  return (
    <div id="add-event">
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Submit Event</button>
      </form>
    </div>
  );
}
