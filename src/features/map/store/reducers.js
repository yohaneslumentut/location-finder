import {
  FETCH_DEFAULT_LOCATION,
  FETCH_DEFAULT_LOCATION_FULFILLED,
  MAP_SCRIPT_LOADED,
} from './types';

const initialState = {
  isFetching: false,
  location: null,
  status: null,
  scriptLoaded: false,
};

export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEFAULT_LOCATION:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_DEFAULT_LOCATION_FULFILLED:
      return {
        ...state,
        isFetching: false,
        location: action.payload,
        status: 'OK',
      };

    case MAP_SCRIPT_LOADED:
      return {
        ...state,
        scriptLoaded: true,
      };

    default:
      return state;
  }
};
