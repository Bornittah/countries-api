import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCountries, getRegionDetails } from '../components/modules/Countries';

const GET_COUNTRIES = './rockets/fetchCountries/GET_COUNTRIES';
const GET_DETAILS = './rockets/fetchRegionDetails/GET_DETAILS';

export const fetchCountries = createAsyncThunk(GET_COUNTRIES,
  async () => {
    const response = await getCountries();
    return response;
  });

export const fetchRegionDetails = createAsyncThunk(GET_DETAILS,
  async (title) => {
    const response = await getRegionDetails(title);
    return response;
  });

const slice = createSlice({
  name: 'countries',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (countries, action) => action.payload);
    builder.addCase(fetchRegionDetails.fulfilled, (countries, action) => action.payload);
  },
});

export const { fetchedCountries, fetchedRegionDetails } = slice.actions;
export default slice.reducer;
