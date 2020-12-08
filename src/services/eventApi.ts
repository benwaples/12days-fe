import { EventType } from '../types';
import { del, get, patch, post } from './request';

export const addEvent = (
  name: string,
  description: string,
  image: string,
  date: string
) => post('/api/v1/events', { id: 'random', name, description, image, date });

export const getEventById = (path: string | null) => get(path);

export const getEvents = () => get('/api/v1/events');

export const deleteEvent = (id: string | null | boolean) =>
  del(`/api/v1/events/${id}`);

export const patchEvent = (id: string | null | boolean, newEvent: EventType) =>
  patch(`/api/v1/events/${id}`, newEvent);

export const mungeEvents = (events: EventType[]) => {
  return events.map((event: EventType) => ({
    id: event.id,
    title: event.name,
    start: event.date,
    url: event.image,
    textColor: 'black',
  }));
};
