import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';
import { Workout } from '../AddWorkout/types';

// The initial state of the WorkoutHistory container
export const initialState: ContainerState = {
  workouts: [],
};

const workoutHistorySlice = createSlice({
  name: 'workoutHistory',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    fetchWorkoutsAction(state) {},
    fetchWorkoutsSuccess(state, action: PayloadAction<Array<Workout>>) {
      state.workouts = action.payload;
    },
    fetchWorkoutsFailure(state, action: PayloadAction<string>) {
      console.log(action.payload);
    },
  },
});

export const { actions, reducer, name: sliceKey } = workoutHistorySlice;
