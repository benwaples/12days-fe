import React, { useEffect, useState } from 'react';

export default function EventDetails() {
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetch event
    // set event
    // update loading and set error if error while fetching
    // this may also include comments
  });

  return (
    <div id="detailedEvent">
      <h1>Event</h1>
    </div>
  );
}
