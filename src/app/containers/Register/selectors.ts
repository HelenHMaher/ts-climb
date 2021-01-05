import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.register || initialState;

export const selectRegister = createSelector(
  [selectDomain],
  registerState => registerState,
);

export const selectErrorMessage = createSelector(
  [selectDomain],
  substate => substate.errorMessage,
);

export const selectSuccessMessage = createSelector(
  [selectDomain],
  substate => substate.successMessage,
);

export const selectNewUserInfo = createSelector(
  [selectDomain],
  substate => substate.newUserInfo,
);
