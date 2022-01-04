import { combineReducers } from 'redux';

import { screenReducer, detailsReducer } from './reducers';

const reducers = combineReducers({
  screenReducer,
  detailsReducer,
});

export default reducers;
