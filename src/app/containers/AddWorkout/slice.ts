import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the AddWorkout container
export const initialState: ContainerState = {};

const addWorkoutSlice = createSlice({
  name: 'addWorkout',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const {
  actions: addWorkoutActions,
  reducer,
  name: sliceKey,
} = addWorkoutSlice;
