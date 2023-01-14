import { combineReducers } from '@reduxjs/toolkit';
import CountriesReducer from './countries';
import countriesQuery from './continentQuery';

const reducers = combineReducers({
  countries: CountriesReducer,
  searcContries: countriesQuery,
});

export default reducers;
