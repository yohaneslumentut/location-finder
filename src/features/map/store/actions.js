import { createAction } from '@reduxjs/toolkit';
import {
  FETCH_DEFAULT_LOCATION,
  FETCH_DEFAULT_LOCATION_FULFILLED,
  SET_LANGUAGE,
  SET_IS_READY,
  SET_IS_RELOAD_OK,
  SET_MAP,
  RESET_MAP,
  SET_SELECTED_ADDRESS,
  SET_SELECTED_PLACE,
} from './types';

export const fetchDefaultLocation = () => ({ type: FETCH_DEFAULT_LOCATION });

export const fetchDefaultLocationFulfilled = (payload) => ({
  type: FETCH_DEFAULT_LOCATION_FULFILLED,
  payload,
});

export const setLang = createAction(SET_LANGUAGE);

export const setIsReady = createAction(SET_IS_READY);

export const setIsReloadOk = createAction(SET_IS_RELOAD_OK);

export const setMap = createAction(SET_MAP);

export const resetMap = createAction(RESET_MAP);

export const setSelectedAddress = createAction(SET_SELECTED_ADDRESS);

export const setSelectedPlace = createAction(SET_SELECTED_PLACE);
