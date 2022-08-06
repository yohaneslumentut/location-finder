import { applyMiddleware, compose } from 'redux';
import { legacy_createStore as createStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import reducers from './reducers';
import epics from './epics';
import * as actions from './actions';

const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore(initialState) {
  const middlewares = [epicMiddleware];
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  const store = createStore(reducers, initialState, enhancer);
  epicMiddleware.run(epics);
  return store;
}

const store = configureStore();

export { store, actions };
