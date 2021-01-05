import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, User } from './types';

// The initial state of the Login container
export const initialState: ContainerState = {
  errorMessage: null,
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
    loginFailureAction(state) {
      state.errorMessage = 'login failure';
    },
    loginSuccessAction(state) {
      state.errorMessage = '';
      localStorage.setItem('isAuthenticated', 'true');
    },
  },
});

export const { actions, reducer, name: sliceKey } = loginSlice;
