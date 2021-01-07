import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, NewUser } from './types';

// The initial state of the Register container
export const initialState: ContainerState = {
  errorMessage: null,
  successMessage: null,
  newUserInfo: { username: '', password: '', confPassword: '', email: '' },
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    passwordAction(state, action: PayloadAction<string>) {
      state.newUserInfo.password = action.payload;
    },
    usernameAction(state, action: PayloadAction<string>) {
      state.newUserInfo.username = action.payload;
    },
    confPasswordAction(state, action: PayloadAction<string>) {
      state.newUserInfo.confPassword = action.payload;
    },
    emailAction(state, action: PayloadAction<string>) {
      state.newUserInfo.email = action.payload;
    },
    registerAction(state, action: PayloadAction<NewUser>) {},
    registerFailureAction(state, action: PayloadAction<string>) {
      state.errorMessage = `register failure: ${action.payload}`;
      state.successMessage = null;
    },
    registerSuccessAction(state, action: PayloadAction<string>) {
      state.errorMessage = null;
      state.newUserInfo.password = '';
      state.newUserInfo.username = '';
      state.newUserInfo.confPassword = '';
      state.newUserInfo.email = '';
      state.successMessage = `successfully registered: ${action.payload}`;
    },
  },
});

export const { actions, reducer, name: sliceKey } = registerSlice;
