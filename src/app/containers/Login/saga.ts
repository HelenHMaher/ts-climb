import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { User } from './types';

export function* loginBackendCall(action: PayloadAction<User>) {
  console.log('action is: ', action);

  action.payload.username === 'Admin'
    ? yield put(actions.loginSuccessAction())
    : yield put(actions.loginFailureAction());
}

export function* loginSaga() {
  yield takeLatest(actions.loginAction.type, loginBackendCall);
}
