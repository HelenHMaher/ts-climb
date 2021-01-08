import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the StartWorkout container
export const initialState: ContainerState = { display: 'true' };

const constructionNoticeSlice = createSlice({
  name: 'constructionNotice',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    displayComponent(state) {
      state.display = 'false';
    },
  },
});

export const { actions, reducer, name: sliceKey } = constructionNoticeSlice;
