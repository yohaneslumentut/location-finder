import { combineEpics } from 'redux-observable';
import { pingEpic } from '../../features/pingpong';
import { fetchDefaultLocationEpic } from '../../features/map';

const epics = combineEpics(...[pingEpic], ...[fetchDefaultLocationEpic]);

export default epics;
