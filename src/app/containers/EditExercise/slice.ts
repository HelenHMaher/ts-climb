import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the EditExercise container
export const initialState: ContainerState = {};

const editExerciseSlice = createSlice({
  name: 'editExercise',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const {
  actions: editExerciseActions,
  reducer,
  name: sliceKey,
} = editExerciseSlice;
