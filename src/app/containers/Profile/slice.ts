import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, CurrentUser } from './types';

// The initial state of the Profile container
export const initialState: ContainerState = {
  user: {
    username: null,
    email: null,
    registeredAt: null,
    lastLoggedIn: null,
    _id: null,
  },
  errorMessage: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    profileAction(state) {},
    profileSuccessAction(state, action: PayloadAction<CurrentUser>) {
      state.errorMessage = null;
      state.user = action.payload;
    },
    profileFailureAction(state, action: PayloadAction<string>) {
      if (action.payload === 'not authenticated') {
        localStorage.removeItem('isAuthenticated');
      }
      state.errorMessage = `profile information error: ${action.payload}`;
    },
  },
});

export const { actions, reducer, name: sliceKey } = profileSlice;
