import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Contacts, ContactsSliceState } from './types';

const initialState: ContactsSliceState = {
  contacts: {
    phones: [],
    emails: [],
    websites: [],
  },
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContacts: (state, action: PayloadAction<Contacts>) => {
      state.contacts = action.payload;
    },
  },
});

export const { setContacts } = contactsSlice.actions;
