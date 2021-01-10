import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, Exercise } from './types';

// The initial state of the AddExercise container
export const initialState: ContainerState = {
  errorMessage: null,
  successMessage: null,
};

const addExerciseSlice = createSlice({
  name: 'addExercise',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    addExerciseAction(state, action: PayloadAction<Exercise>) {},
    addExerciseFailureAction(state, action: PayloadAction<string>) {
      state.errorMessage = `Exercise error: ${action.payload}`;
    },
    addExerciseSuccessAction(state, action: PayloadAction<string>) {
      state.successMessage = `Exercise success: ${action.payload}`;
    },
  },
});

export const { actions, reducer, name: sliceKey } = addExerciseSlice;
