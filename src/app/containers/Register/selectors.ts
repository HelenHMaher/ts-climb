import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.register || initialState;

export const selectRegister = createSelector(
  [selectDomain],
  registerState => registerState,
);
