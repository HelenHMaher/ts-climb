import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.exercises || initialState;

export const selectExercises = createSelector(
  [selectDomain],
  exercisesState => exercisesState.exercises,
);
