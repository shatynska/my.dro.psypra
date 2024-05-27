import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { User, UserSliceState } from './types';

const initialState: UserSliceState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const selectUser = (state: RootState) => state.user.user;

export const { setUser, logout } = userSlice.actions;
