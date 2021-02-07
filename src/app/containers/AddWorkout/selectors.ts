import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.addWorkout || initialState;

export const selectAddWorkout = createSelector(
  [selectDomain],
  addWorkoutState => addWorkoutState,
);
