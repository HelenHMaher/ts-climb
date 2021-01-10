import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { Exercise } from '../AddExercise/types';
import { ContainerState } from './types';

// The initial state of the Exercises container
export const initialState: ContainerState = {
  exercises: [],
};

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    fetchExercisesAction(state) {},
    fetchExercisesSuccess(state, action: PayloadAction<Array<Exercise>>) {
      state.exercises = action.payload;
    },
    fetchExercisesFailure(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = exercisesSlice;
