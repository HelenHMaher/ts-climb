import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.workoutHistory || initialState;

export const selectWorkoutHistory = createSelector(
  [selectDomain],
  workoutHistoryState => workoutHistoryState.workouts,
);
