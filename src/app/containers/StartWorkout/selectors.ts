import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.startWorkout || initialState;

export const selectStartWorkout = createSelector(
  [selectDomain],
  startWorkoutState => startWorkoutState,
);
