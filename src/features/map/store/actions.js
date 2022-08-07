import { createAction } from '@reduxjs/toolkit';
import {
  FETCH_DEFAULT_LOCATION,
  FETCH_DEFAULT_LOCATION_FULFILLED,
  MAP_SCRIPT_LOADED,
  SET_SELECTED_PLACE,
} from './types';

export const fetchDefaultLocation = () => ({ type: FETCH_DEFAULT_LOCATION });

export const fetchDefaultLocationFulfilled = (payload) => ({
  type: FETCH_DEFAULT_LOCATION_FULFILLED,
  payload,
});

export const mapScriptLoaded = createAction(MAP_SCRIPT_LOADED);

export const setSelectedPlace = createAction(SET_SELECTED_PLACE);
