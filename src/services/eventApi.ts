import { EventType } from '@testing-library/react';
import { get, post } from './request';

export const addEvent = (event: EventType) => post('/api/v1/events', event);

export const getEventById = (path: string) => get(path);

export const getEvents = () => get('/api/v1/events');
