import React from 'react';

export const renderEventImage = (eventInfo: {
  event: { _def: { title: string | null | undefined; url: string } };
}) => {

  const details = eventInfo?.event._def
  
  return (
    <div id="event" onClick={e => e.preventDefault()}>
      <img
        id="event-image"
        src={details.url}
        alt={details.title as string | undefined}
      />
      <h2>{details.title}</h2>
    </div>
  );
};