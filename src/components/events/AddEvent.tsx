import React, { useState } from 'react';

export default function AddEvent(): JSX.Element {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // make API call here
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
