import { combineEpics } from 'redux-observable';
import { pingEpic } from '../../features/pingpong';

const epics = combineEpics(...[pingEpic]);

export default epics;
