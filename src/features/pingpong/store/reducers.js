import { PING, PONG } from './types';

export const pingReducer = (state = { isPinging: false }, action) => {
  switch (action.type) {
    case PING:
      return {
        isPinging: true,
        milliseconds: 0,
        progress: 0,
      };

    case PONG:
      return {
        isPinging: false,
        milliseconds: action.payload.milliseconds,
        progress: 100,
      };

    default:
      return state;
  }
};
