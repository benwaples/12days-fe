import { CommentType, EventType, RequestBodyType } from '../types';

const API = 'https://twelvedayschristmas.herokuapp.com';

const request = async (
  path: string | null,
  method: string,
  body: RequestBodyType | string | EventType | CommentType
) => {
  const res = await fetch(`${API}${path}`, {
    method,
    headers: ['POST', 'PUT', 'PATCH'].includes(method)
      ? { 'Content-Type': 'application/json' }
      : {},
    credentials: 'include',
    body: ['POST', 'PUT', 'PATCH'].includes(method)
      ? JSON.stringify(body)
      : null,
  });

  const json = await res.json();

  if (!res.ok) return json;
  return json;
};

export const post = (
  path: string,
  body: RequestBodyType | EventType | string | CommentType
) => request(path, 'POST', body);

export const get = (path: string | null) => request(path, 'GET', '');

export const patch = (path: string, body: EventType) =>
  request(path, 'PATCH', body);

export const del = (path: string) => request(path, 'DELETE', '');
