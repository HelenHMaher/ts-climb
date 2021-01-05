import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { NewUser } from './types';
// import axios from 'axios';

// const serverURL = process.env.REACT_APP_PORT;

export function* registerBackendCall(action: PayloadAction<NewUser>) {
  // const response: { err?: any; payload: any } = async () => {
  //   try {
  //     const result = await axios({
  //       method: 'POST',
  //       url: `http://localhost:${serverURL}/authenticate/register`,
  //       withCredentials: true,
  //       data: { action },
  //     });

  //     return result;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // unwrapResult(response);
  action.payload.username !== 'Admin'
    ? yield put(actions.registerSuccessAction())
    : yield put(actions.registerFailureAction());
}

export function* registerSaga() {
  yield takeLatest(actions.registerAction.type, registerBackendCall);
}
