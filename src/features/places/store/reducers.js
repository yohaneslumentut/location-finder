import { DEBOUNCE_SEARCH, DEBOUNCE_SEARCH_FULFILLED } from './types';

const initialState = {
  searchTerm: null,
  debouncedSearchTerm: null,
};

export const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEBOUNCE_SEARCH:
      return {
        searchTerm: action.payload,
      };
    case DEBOUNCE_SEARCH_FULFILLED:
      return {
        debouncedSearchTerm: action.payload,
      };
    default:
      return state;
  }
};
