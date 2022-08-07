import { filter, debounceTime, map } from 'rxjs';
import { DEBOUNCE_SEARCH } from './types';
import { debounceSearchFullfilled } from './action';

export const debounceSearchEpic = (action$) =>
  action$.pipe(
    filter((action) => action.type === DEBOUNCE_SEARCH),
    debounceTime(300),
    map((action) => debounceSearchFullfilled(action.payload)),
  );
