/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUpdateComments } from '../../actions/eventActions';
import { getEventComments } from '../../services/commentApi';
import { RootStateType } from '../../types';
import AddComment from './AddComment';
import Comment from './Comment';
import './CommentList.scss';

export default function CommentList() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const id = useSelector(
    (state: RootStateType) => state.calendar.detailedEventId
  );
  const updateComments = useSelector(
    (state: RootStateType) => state.calendar.updateComments
  );

  useEffect(() => {
    setLoading(true);
    setError(null);
    getEventComments(id as string)
      .then((res) => setComments(res))
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(false);
        dispatch(setUpdateComments(false));
      });
  }, [id, updateComments]);

  // eslint-disable-next-line react/jsx-props-no-spreading
  const eventComments = comments.map((comment) => <Comment {...comment} />);

  if (loading) return <h1>Loading...</h1>;

  if (error)
    return (
      <>
        <h1>No comments for this event yet</h1>
        <AddComment />
      </>
    );
  return (
    <div id="comment-list">
      {eventComments}
      <AddComment />
    </div>
  );
}
