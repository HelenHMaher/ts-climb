import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.workoutHistory || initialState;

export const selectWorkoutHistory = createSelector(
  [selectDomain],
  workoutHistoryState => workoutHistoryState.workouts,
);

export const selectWorkoutToEdit = createSelector(
  [selectDomain],
  workoutHistoryState => workoutHistoryState.editWorkout,
);

export const selectExerciseInWorkoutToEdit = createSelector(
  [selectDomain],
  workoutHistoryState => workoutHistoryState.editExerciseInWorkout,
);
