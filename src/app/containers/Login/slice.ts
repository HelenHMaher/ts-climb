import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, User, LoginSuccess } from './types';

// The initial state of the Login container
export const initialState: ContainerState = {
  errorMessage: null,
  successMessage: null,
  userInfo: { username: '', password: '' },
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    passwordAction(state, action: PayloadAction<string>) {
      state.userInfo.password = action.payload;
    },
    usernameAction(state, action: PayloadAction<string>) {
      state.userInfo.username = action.payload;
    },
    loginAction(state, action: PayloadAction<User>) {},
    loginFailureAction(state, action: PayloadAction<string>) {
      state.errorMessage = `login failure: ${action.payload}`;
      state.successMessage = null;
    },
    loginSuccessAction(state, action: PayloadAction<LoginSuccess>) {
      state.errorMessage = null;
      state.successMessage = `login success: ${action.payload.msg}`;
      state.userInfo.username = '';
      state.userInfo.password = '';
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('x-auth-token', action.payload.token);
    },
  },
});

export const { actions, reducer, name: sliceKey } = loginSlice;
