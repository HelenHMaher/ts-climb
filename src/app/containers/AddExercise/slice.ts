import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, Exercise } from './types';

// The initial state of the AddExercise container
export const initialState: ContainerState = {
  errorMessage: null,
};

const addExerciseSlice = createSlice({
  name: 'addExercise',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    addExerciseAction(state, action: PayloadAction<Exercise>) {},
    addExerciseFailureAction(state) {
      state.errorMessage =
        'Exercise name exists already, please choose another';
    },
    addExerciseSuccessAction(state) {},
  },
});

export const { actions, reducer, name: sliceKey } = addExerciseSlice;
