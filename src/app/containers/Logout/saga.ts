// import { call, put, takeLatest } from 'redux-saga/effects';
// import { actions } from './slice';
// import axios from 'axios';

// const serverURL = process.env.REACT_APP_SERVER;

// export const axiosCall = (params: any) => axios({ ...params });

// export function* handleError(error: any) {
//   console.log(error);
//   yield put(actions.logoutFailureAction('Failure to logout'));
// }

// export function* logoutBackendCall() {
//   try {
//     const params = {
//       method: 'GET',
//       url: `${serverURL}/authenticate/logout`,
//       withCredentials: true,
//     };
//     const response = yield call(axiosCall, params);
//     yield put(actions.logoutSuccessAction(JSON.stringify(response.data.msg)));
//   } catch (error) {
//     yield call(handleError, error);
//   }
// }

export function* logoutSaga() {
  // yield takeLatest(actions.logoutAction.type, logoutBackendCall);
}
