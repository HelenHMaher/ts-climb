import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { Exercise } from '../AddExercise/types';
import axios from 'axios';

const serverURL = process.env.REACT_APP_SERVER;

export const axiosCall = (params: any) => axios({ ...params });

export function* handleErrorDelete(error: {
  response: { data: { msg: string } };
}) {
  const errorMsg: string = error?.response?.data?.msg;
  yield put(actions.deleteExerciseFailureAction(errorMsg));
}

export function* handleError(error: { response: { data: { msg: string } } }) {
  const errorMsg: string = error?.response?.data?.msg;
  yield put(actions.editExerciseFailureAction(errorMsg));
}

export function* editExerciseBackendCall(action: PayloadAction<Exercise>) {
  try {
    const params = {
      method: 'PATCH',
      url: `${serverURL}/api/exercises/updateExercise`,
      headers: { 'x-auth-token': localStorage.getItem('x-auth-token') },
      data: action.payload,
    };
    const response = yield call(axiosCall, params);
    yield put(actions.editExerciseSuccessAction(response.data.msg));
  } catch (error) {
    yield call(handleError, error);
  }
}

export function* deleteExerciseBackendCall(action: PayloadAction<Exercise>) {
  try {
    const params = {
      method: 'DELETE',
      url: `${serverURL}/api/exercises/deleteExercise`,
      headers: { 'x-auth-token': localStorage.getItem('x-auth-token') },
      data: action.payload,
    };
    const response = yield call(axiosCall, params);
    yield put(actions.deleteExerciseSuccessAction(response.data.msg));
  } catch (error) {
    yield call(handleErrorDelete, error);
  }
}

/**
 * This is watching for actions, and then calling a subsequent function with that action
 */
export function* editExerciseSaga() {
  yield takeLatest(actions.editExerciseAction.type, editExerciseBackendCall);
  yield takeLatest(
    actions.deleteExerciseAction.type,
    deleteExerciseBackendCall,
  );
}
