import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { Workout } from './types';
import axios from 'axios';

const serverURL = process.env.REACT_APP_SERVER;

export const axiosCall = (params: any) => axios({ ...params });

export function* handleError(error: {
  response: { data: { msg: string }; status: number };
}) {
  if (error.response.status === 401) {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('x-auth-token');
    window.location.reload();
  }
  const errorMsg: string = error?.response?.data?.msg;
  yield put(actions.addWorkoutFailureAction(errorMsg));
}

export function* addWorkoutBackendCall(action: PayloadAction<Workout>) {
  try {
    const params = {
      method: 'POST',
      url: `${serverURL}/api/workouts/newWorkout`,
      headers: { 'x-auth-token': localStorage.getItem('x-auth-token') },
      data: action.payload,
    };
    const response = yield call(axiosCall, params);
    yield put(actions.addWorkoutSuccessAction(response.data.msg));
  } catch (error) {
    yield call(handleError, error);
  }
}

/**
 * This is watching for actions, and then calling a subsequent function with that action
 */
export function* addWorkoutSaga() {
  yield takeLatest(actions.addWorkoutAction.type, addWorkoutBackendCall);
}
