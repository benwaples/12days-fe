import React from 'react';
import { useDispatch } from 'react-redux';
import { setDetailedEventId } from '../actions/eventActions';

const renderEventImage = (eventInfo: {
  event: {
    _def: { title: string | null | undefined; url: string; id: string };
  };
}) => {
  // eslint-disable-next-line no-underscore-dangle
  const details = eventInfo?.event._def;
  const dispatch = useDispatch();

  return (
    <div id="event" onClick={(e) => e.preventDefault()}>
      <img
        id="event-image"
        src={details.url}
        alt={details.title as string | undefined}
      />
      <button
        type="button"
        onClick={() => dispatch(setDetailedEventId(details.id))}
      >
        <h2>{details.title}</h2>
      </button>
    </div>
  );
};

export default renderEventImage;
