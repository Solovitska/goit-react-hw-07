import { createSlice, createSelector } from '@reduxjs/toolkit';
import {
  apiGetContacts,
  apiPostContacts,
  apiDelContacts,
} from './contactsOps';
import { selectNameFilter } from './filtersSlice';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(apiGetContacts.pending, handlePending)
      .addCase(apiGetContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(apiGetContacts.rejected, handleRejected)
      .addCase(apiPostContacts.pending, handlePending)
      .addCase(apiPostContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(apiPostContacts.rejected, handleRejected)
      .addCase(apiDelContacts.pending, handlePending)
      .addCase(apiDelContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(apiDelContacts.rejected, handleRejected);
  },
});

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export default contactsSlice.reducer;