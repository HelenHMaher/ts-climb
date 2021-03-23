import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { Exercise } from '../AddExercise/types';
import { ContainerState } from './types';

// The initial state of the Exercises container
export const initialState: ContainerState = {
  exercises: [],
  editExercise: null,
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
    fetchExercisesFailure(state, action: PayloadAction<string>) {
      console.log(action.payload);
    },
    editExerciseAction(state, action: PayloadAction<Exercise | null>) {
      state.editExercise = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = exercisesSlice;
