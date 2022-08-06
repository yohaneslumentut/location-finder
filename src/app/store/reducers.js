import { combineReducers } from 'redux';
import { pingReducer } from '../../features/pingpong';
import { mapReducer } from '../../features/map';

const reducers = combineReducers({
  ping: pingReducer,
  googleMap: mapReducer,
});

export default reducers;
