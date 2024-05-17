import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeNameFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeNameFilter } = filtersSlice.actions; 
export const selectNameFilter = (state) => state.filters.name; 

export default filtersSlice.reducer;