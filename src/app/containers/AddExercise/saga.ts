import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { Exercise } from './types';
import axios from 'axios';

const serverURL = process.env.REACT_APP_SERVER;

export const axiosCall = (params: any) => axios({ ...params });

export function* handleError(error: { response: { data: { msg: string } } }) {
  const errorMsg: string = error?.response?.data?.msg;
  yield put(actions.addExerciseFailureAction(errorMsg));
}

export function* addExerciseBackendCall(action: PayloadAction<Exercise>) {
  try {
    const params = {
      method: 'POST',
      url: `${serverURL}/api/exercises/newExercise`,
      withCredentials: true,
      data: action.payload,
    };
    const response = yield call(axiosCall, params);
    yield put(actions.addExerciseSuccessAction(response.data.msg));
  } catch (error) {
    yield call(handleError, error);
  }
}

/**
 * This is watching for actions, and then calling a subsequent function with that action
 */
export function* addExerciseSaga() {
  yield takeLatest(actions.addExerciseAction.type, addExerciseBackendCall);
}
