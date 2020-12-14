import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDetailedEventId } from '../../actions/eventActions';
import { deleteEvent } from '../../services/eventApi';
import { CommentType, RootStateType } from '../../types';

export default function Comment({
  comment,
  username,
  department,
  id,
}: CommentType) {
  const currentUsername = useSelector(
    (state: RootStateType) => state.auth.username
  );
  const dispatch = useDispatch();

  async function handleDelete() {
    await deleteEvent(id);
    dispatch(setDetailedEventId(id as string));
  }

  return (
    <div key={id as string}>
      <p>
        {username} from {department}: {comment}
      </p>
      {username === currentUsername && (
        <button onClick={handleDelete} type="button">
          X
        </button>
      )}
    </div>
  );
}
