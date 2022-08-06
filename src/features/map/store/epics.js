import { ofType } from 'redux-observable';
import { map, mergeMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { FETCH_DEFAULT_LOCATION } from './types';
import { fetchDefaultLocationFulfilled } from './actions';

const apiKey = process.env.REACT_APP_API_REGISTRY_KEY;

export const fetchDefaultLocationEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_DEFAULT_LOCATION),
    mergeMap(() =>
      ajax.getJSON(`https://api.ipregistry.co/?key=${apiKey}`).pipe(
        map((response) => {
          const { latitude, longitude } = response.location;
          return fetchDefaultLocationFulfilled({
            lat: latitude,
            lng: longitude,
          });
        }),
      ),
    ),
  );
