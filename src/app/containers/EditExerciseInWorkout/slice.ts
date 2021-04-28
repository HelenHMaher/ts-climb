import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, ExerciseInWorkout } from './types';

// The initial state of the EditExerciseInWorkout container
export const initialState: ContainerState = {
  errorMessage: null,
  successMessage: null,
};

const editExerciseInWorkoutSlice = createSlice({
  name: 'editExerciseInWorkout',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    editExerciseInWorkoutAction(
      state,
      action: PayloadAction<{
        workoutId: string;
        exerciseInstanceId: string;
        exercise: ExerciseInWorkout;
      }>,
    ) {},
    editExerciseInWorkoutFailureAction(state, action: PayloadAction<string>) {
      state.errorMessage = `Edit exercise error: ${action.payload}`;
    },
    editExerciseInWorkoutSuccessAction(state, action: PayloadAction<string>) {
      state.successMessage = `Edit exercise success: ${action.payload}`;
    },
    deleteExerciseInWorkoutAction(
      state,
      action: PayloadAction<{ workoutId: string; exerciseInstanceId: string }>,
    ) {},
    deleteExerciseInWorkoutFailureAction(state, action: PayloadAction<string>) {
      state.errorMessage = `Delete exercise error: ${action.payload}`;
    },
    deleteExerciseInWorkoutSuccessAction(state, action: PayloadAction<string>) {
      state.successMessage = `Delete exercise success: ${action.payload}`;
    },
  },
});

export const { actions, reducer, name: sliceKey } = editExerciseInWorkoutSlice;
