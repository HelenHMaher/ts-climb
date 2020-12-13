import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the StartWorkout container
export const initialState: ContainerState = {};

const startWorkoutSlice = createSlice({
  name: 'startWorkout',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const {
  actions: startWorkoutActions,
  reducer,
  name: sliceKey,
} = startWorkoutSlice;
