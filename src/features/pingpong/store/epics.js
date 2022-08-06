import { filter, delay, map } from 'rxjs';
import { PING } from './types';
import { pongAction } from './actions';

const delayTime = 1000;

export const pingEpic = (action$) =>
  action$.pipe(
    filter((action) => action.type === PING),
    delay(delayTime),
    map(() => pongAction({ milliseconds: delayTime })),
  );
