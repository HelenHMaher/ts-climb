import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Register container
export const initialState: ContainerState = {};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions: registerActions, reducer, name: sliceKey } = registerSlice;