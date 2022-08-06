import { combineReducers } from 'redux';
import { pingReducer } from '../../features/pingpong';

const reducers = combineReducers({
  ping: pingReducer,
});

export default reducers;
