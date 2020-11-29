import { EventType } from '@testing-library/react';
import { post } from './request';

export const addEvent = (event: EventType) => post('/api/v1/events', event);
