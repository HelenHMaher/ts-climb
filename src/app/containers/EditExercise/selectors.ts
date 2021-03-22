import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.editExercise || initialState;

export const selectEditExercise = createSelector(
  [selectDomain],
  editExerciseState => editExerciseState,
);
