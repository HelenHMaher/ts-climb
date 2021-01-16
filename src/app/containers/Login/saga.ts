import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { User } from './types';
import axios from 'axios';

export const axiosCall = (params: any) => axios({ ...params });

export function* handleError(error: { response: { data: { msg: string } } }) {
  const errorMsg: string = error?.response?.data?.msg;
  yield put(actions.loginFailureAction(JSON.stringify(errorMsg)));
}

export function* loginBackendCall(action: PayloadAction<User>) {
  try {
    const params = {
      method: 'POST',
      url: `/authenticate/login`,
      withCredentials: true,
      data: action.payload,
    };
    const response = yield call(axiosCall, params);
    yield put(actions.loginSuccessAction(JSON.stringify(response.data.msg)));
  } catch (error) {
    yield call(handleError, error);
  }
}

export function* loginSaga() {
  yield takeLatest(actions.loginAction.type, loginBackendCall);
}
