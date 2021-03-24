import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.editWorkout || initialState;

export const selectErrorMessage = createSelector(
  [selectDomain],
  substate => substate.errorMessage,
);

export const selectSuccessMessage = createSelector(
  [selectDomain],
  substate => substate.successMessage,
);
