import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUpdateComments } from '../../actions/eventActions';
import { deleteComment } from '../../services/commentApi';
import { CommentType, RootStateType } from '../../types';

export default function Comment({
  comment,
  username,
  department,
  id,
}: CommentType) {
  const [error, setError] = useState(null);
  const currentUsername = useSelector(
    (state: RootStateType) => state.auth.username
  );
  const dispatch = useDispatch();

  async function handleDelete() {
    await deleteComment(id as string).catch((err) => setError(err));
    dispatch(setUpdateComments(true));
  }
  if (error) console.log(error);
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
