import { combineReducers } from 'redux';
import { pingReducer } from '../../features/pingpong';
import { mapReducer } from '../../features/map';
import { placesReducer } from '../../features/places';

const reducers = combineReducers({
  ping: pingReducer,
  googleMap: mapReducer,
  places: placesReducer,
});

export default reducers;
