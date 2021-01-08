import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.login || initialState;

export const selectLogin = createSelector(
  [selectDomain],
  loginState => loginState,
);

export const selectErrorMessage = createSelector(
  [selectDomain],
  substate => substate.errorMessage,
);

export const selectSuccessMessage = createSelector(
  [selectDomain],
  substate => substate.successMessage,
);

export const selectUserInfo = createSelector(
  [selectDomain],
  substate => substate.userInfo,
);
