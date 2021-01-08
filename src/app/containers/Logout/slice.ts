import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Logout container
export const initialState: ContainerState = {
  errorMessage: null,
  successMessage: null,
};

const logoutSlice = createSlice({
  name: 'logout',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    logoutAction(state) {},
    logoutFailureAction(state, action: PayloadAction<string>) {
      state.errorMessage = `logout failure: ${action.payload}`;
      state.successMessage = null;
    },
    logoutSuccessAction(state, action: PayloadAction<string>) {
      state.successMessage = `logout success: ${action.payload}`;
      localStorage.removeItem('isAuthenticated');
      state.errorMessage = null;
      //TODO:
      //need to reset Redux store on logout
    },
  },
});

export const { actions, reducer, name: sliceKey } = logoutSlice;
