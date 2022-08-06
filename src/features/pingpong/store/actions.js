import { createAction } from '@reduxjs/toolkit';
import { PING, PONG } from './types';

export const pingAction = createAction(PING);

export const pongAction = (payload) => ({
  type: PONG,
  payload,
});
