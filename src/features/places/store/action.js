import { createAction } from '@reduxjs/toolkit';
import { DEBOUNCE_SEARCH, DEBOUNCE_SEARCH_FULFILLED } from './types';

export const debounceSearch = createAction(DEBOUNCE_SEARCH);
export const debounceSearchFullfilled = createAction(DEBOUNCE_SEARCH_FULFILLED);
