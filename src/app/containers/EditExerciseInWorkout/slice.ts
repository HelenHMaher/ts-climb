import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the EditExerciseInWorkout container
export const initialState: ContainerState = {};

const editExerciseInWorkoutSlice = createSlice({
  name: 'editExerciseInWorkout',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const {
  actions: editExerciseInWorkoutActions,
  reducer,
  name: sliceKey,
} = editExerciseInWorkoutSlice;
