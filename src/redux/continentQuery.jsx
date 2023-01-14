import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'searchContinent',
  initialState: '',
  reducers: {
    setQuery(query, action) {
      return action.payload;
    },
  },
});

export const { setQuery } = slice.actions;

export default slice.reducer;
