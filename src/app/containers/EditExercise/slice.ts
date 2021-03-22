import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';
import { Exercise } from '../AddExercise/types';

// The initial state of the EditExercise container
export const initialState: ContainerState = {
  errorMessage: null,
  successMessage: null,
  editDisplay: 'false',
};

const editExerciseSlice = createSlice({
  name: 'editExercise',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    editDisplayAction(state, action: PayloadAction<'true' | 'false'>) {
      state.editDisplay = action.payload;
    },
    editExerciseAction(state, action: PayloadAction<Exercise>) {},
    editExerciseFailureAction(state, action: PayloadAction<string>) {
      state.errorMessage = `Edit exercise error: ${action.payload}`;
    },
    editExerciseSuccessAction(state, action: PayloadAction<string>) {
      state.successMessage = `Edit exercise success: ${action.payload}`;
    },
    deleteExerciseAction(state, action: PayloadAction<Exercise>) {},
    deleteExerciseFailureAction(state, action: PayloadAction<string>) {
      state.errorMessage = `Delete exercise error: ${action.payload}`;
    },
    deleteExerciseSuccessAction(state, action: PayloadAction<string>) {
      state.successMessage = `Delete exercise success: ${action.payload}`;
    },
  },
});

export const { actions, reducer, name: sliceKey } = editExerciseSlice;
