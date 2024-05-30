import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { CoreData, CoreDataSliceState } from './types';

const initialState: CoreDataSliceState = {
  coreData: {
    isPublic: false,
    firstName: '',
    lastName: '',
  },
};

export const coreDataSlice = createSlice({
  name: 'coreData',
  initialState,
  reducers: {
    setCoreData: (state, action: PayloadAction<CoreData>) => {
      state.coreData = action.payload;
    },
    setFirstName: (state, action: PayloadAction<CoreData['firstName']>) => {
      state.coreData.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<CoreData['lastName']>) => {
      state.coreData.lastName = action.payload;
    },
    setIsPublic: (state, action: PayloadAction<CoreData['isPublic']>) => {
      state.coreData.isPublic = action.payload;
    },
  },
});

export const selectCoreData = (state: RootState) => state.coreData.coreData;

export const { setCoreData, setIsPublic, setFirstName, setLastName } =
  coreDataSlice.actions;
