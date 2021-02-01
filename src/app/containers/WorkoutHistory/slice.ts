import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the WorkoutHistory container
export const initialState: ContainerState = {};

const workoutHistorySlice = createSlice({
  name: 'workoutHistory',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const {
  actions: workoutHistoryActions,
  reducer,
  name: sliceKey,
} = workoutHistorySlice;
