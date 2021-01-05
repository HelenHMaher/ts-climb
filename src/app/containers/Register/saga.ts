import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { NewUser } from './types';

export function* registerBackendCall(action: PayloadAction<NewUser>) {
  console.log('action is: ', action);

  action.payload.username !== 'Admin'
    ? yield put(actions.registerSuccessAction())
    : yield put(actions.registerFailureAction());
}

export function* registerSaga() {
  yield takeLatest(actions.registerAction.type, registerBackendCall);
}
