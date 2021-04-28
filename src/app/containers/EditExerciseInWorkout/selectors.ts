import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.editExerciseInWorkout || initialState;

export const selectEditExerciseInWorkout = createSelector(
  [selectDomain],
  editExerciseInWorkoutState => editExerciseInWorkoutState,
);
