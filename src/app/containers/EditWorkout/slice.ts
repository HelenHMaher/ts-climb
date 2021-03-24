import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';
import { Workout } from '../AddWorkout/types';

// The initial state of the EditWorkout container
export const initialState: ContainerState = {
  errorMessage: null,
  successMessage: null,
};

const editWorkoutSlice = createSlice({
  name: 'editWorkout',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    editWorkoutAction(state, action: PayloadAction<Workout>) {},
    editWorkoutFailureAction(state, action: PayloadAction<string>) {
      state.errorMessage = `Edit exercise error: ${action.payload}`;
    },
    editWorkoutSuccessAction(state, action: PayloadAction<string>) {
      state.successMessage = `Edit exercise success: ${action.payload}`;
    },
    deleteWorkoutAction(state, action: PayloadAction<Workout>) {},
    deleteWorkoutFailureAction(state, action: PayloadAction<string>) {
      state.errorMessage = `Delete exercise error: ${action.payload}`;
    },
    deleteWorkoutSuccessAction(state, action: PayloadAction<string>) {
      state.successMessage = `Delete exercise success: ${action.payload}`;
    },
  },
});

export const { actions, reducer, name: sliceKey } = editWorkoutSlice;
