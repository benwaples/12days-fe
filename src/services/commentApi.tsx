import { CommentType } from '../types';
import { post, get, del } from './request';

export const postComment = (comment: CommentType) => {
  post('/api/v1/comments', comment);
};

export const getEventComments = (id: string) => {
  get(`/api/v1/comments/${id}`);
};

export const deleteComment = (id: string) => {
  del(`/api/v1/comments/${id}`);
};
