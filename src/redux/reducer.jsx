import { combineReducers } from '@reduxjs/toolkit';
import reducers from './combineReducers';

export default combineReducers({
  entities: reducers,
});
