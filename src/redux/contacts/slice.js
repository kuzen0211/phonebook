import { createSlice } from '@reduxjs/toolkit';

import { logOut } from 'redux/auth/operations';

import {
  fetchContacts,
  deleteContact,
  addContact,
  editContact,
} from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(editContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const { id, name, number } = payload;
        const idx = state.items.findIndex(contact => contact.id === id);
        state.items[idx] = { id, name, number };
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(({ id }) => id !== payload.id);
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        ({ type }) => type.endsWith('/pending'),
        ({ isLoading }) => {
          isLoading = true;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith('/rejected'),
        ({ error, isLoading }, { payload }) => {
          error = payload;
          isLoading = false;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
