import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setDetailedEventId,
  setUpdateComments,
} from '../../actions/eventActions';
import { postComment } from '../../services/commentApi';
import { RootStateType } from '../../types';

export default function AddComment() {
  const [comment, setComment] = useState('');
  const eventId = useSelector(
    (state: RootStateType) => state.calendar.detailedEventId
  );
  const username = useSelector((state: RootStateType) => state.auth.username);
  const department = useSelector((state: RootStateType) => state.auth.userRole);
  const dispatch = useDispatch();

  async function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    await postComment({ id: '', comment, department, username, eventId });
    dispatch(setDetailedEventId(eventId as string));
    setComment('');
    dispatch(setUpdateComments(true));
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={({ target }) => setComment(target.value)}
        value={comment}
        placeholder="make a comment"
      />
    </form>
  );
}
