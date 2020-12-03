import { get, post } from './request';

export const addEvent = (
  name: string,
  description: string,
  image: string,
  date: string
) => post('/api/v1/events', { name, description, image, date });

export const getEventById = (path: string) => get(path);

export const getEvents = () => get('/api/v1/events');
