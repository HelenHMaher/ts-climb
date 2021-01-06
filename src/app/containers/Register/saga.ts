import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { NewUser } from './types';
import axios from 'axios';

export const axiosCall = (params: any) => axios({ ...params });

const serverURL = process.env.REACT_APP_SERVER;

export function* handleError(error: { response: { data: { code: number } } }) {
  const errorCode: number = error?.response?.data?.code;
  yield put(actions.registerFailureAction(JSON.stringify(errorCode)));
}

export function* registerBackendCall(action: PayloadAction<NewUser>) {
  try {
    const params = {
      method: 'POST',
      url: `${serverURL}/authenticate/register`,
      withCredentials: true,
      data: { action },
    };
    const response = yield call(axiosCall, params);
    response.payload.status === '200'
      ? yield put(
          actions.registerSuccessAction(JSON.stringify(response.data.msg)),
        )
      : yield put(
          actions.registerFailureAction(JSON.stringify(response.data.msg)),
        );
  } catch (error) {
    yield call(handleError, error);
  }
}

export function* registerSaga() {
  yield takeLatest(actions.registerAction.type, registerBackendCall);
}
