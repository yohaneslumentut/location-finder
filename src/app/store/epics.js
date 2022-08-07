import { combineEpics } from 'redux-observable';
import { pingEpic } from '../../features/pingpong';
import { fetchDefaultLocationEpic } from '../../features/map';
import { debounceSearchEpic } from '../../features/places';

const epics = combineEpics(
  pingEpic,
  fetchDefaultLocationEpic,
  debounceSearchEpic,
);

export default epics;
