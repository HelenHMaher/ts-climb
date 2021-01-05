import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, User } from './types';

// The initial state of the Login container
export const initialState: ContainerState = { errorMessage: null };

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    loginAction(state, action: PayloadAction<User>) {},
    loginFailureAction(state) {
      state.errorMessage = 'login failure';
    },
    loginSuccessAction(state) {
      localStorage.setItem('isAuthenticated', 'true');
    },
  },
});

export const { actions, reducer, name: sliceKey } = loginSlice;
