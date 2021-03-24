import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { Workout } from '../AddWorkout/types';
import axios from 'axios';

const serverURL = process.env.REACT_APP_SERVER;

export const axiosCall = (params: any) => axios({ ...params });

export function* handleErrorDelete(error: {
  response: { data: { msg: string } };
}) {
  const errorMsg: string = error?.response?.data?.msg;
  yield put(actions.deleteWorkoutFailureAction(errorMsg));
}

export function* handleError(error: { response: { data: { msg: string } } }) {
  const errorMsg: string = error?.response?.data?.msg;
  yield put(actions.editWorkoutFailureAction(errorMsg));
}

export function* editWorkoutBackendCall(action: PayloadAction<Workout>) {
  try {
    const params = {
      method: 'PATCH',
      url: `${serverURL}/api/workouts/updateWorkout`,
      headers: { 'x-auth-token': localStorage.getItem('x-auth-token') },
      data: action.payload,
    };
    const response = yield call(axiosCall, params);
    yield put(actions.editWorkoutSuccessAction(response.data.msg));
  } catch (error) {
    yield call(handleError, error);
  }
}

export function* deleteWorkoutBackendCall(action: PayloadAction<Workout>) {
  try {
    const params = {
      method: 'DELETE',
      url: `${serverURL}/api/workouts/deleteWorkout`,
      headers: { 'x-auth-token': localStorage.getItem('x-auth-token') },
      data: action.payload,
    };
    const response = yield call(axiosCall, params);
    yield put(actions.deleteWorkoutSuccessAction(response.data.msg));
  } catch (error) {
    yield call(handleErrorDelete, error);
  }
}

/**
 * This is watching for actions, and then calling a subsequent function with that action
 */
export function* editWorkoutSaga() {
  yield takeLatest(actions.editWorkoutAction.type, editWorkoutBackendCall);
  yield takeLatest(actions.deleteWorkoutAction.type, deleteWorkoutBackendCall);
}
