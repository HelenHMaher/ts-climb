import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, Workout } from './types';

// The initial state of the AddWorkout container
export const initialState: ContainerState = {
  errorMessage: null,
  successMessage: null,
};

const addWorkoutSlice = createSlice({
  name: 'addWorkout',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    addWorkoutAction(state, action: PayloadAction<Workout>) {},
    addWorkoutFailureAction(state, action: PayloadAction<string>) {
      state.errorMessage = `Exercise error: ${action.payload}`;
    },
    addWorkoutSuccessAction(state, action: PayloadAction<string>) {
      state.successMessage = `Exercise success: ${action.payload}`;
    },
  },
});

export const { actions, reducer, name: sliceKey } = addWorkoutSlice;
