import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import axios from 'axios';

export const axiosCall = (params: any) => axios({ ...params });

const serverURL = process.env.REACT_APP_SERVER;

export function* handleError(error: {
  response: { data: { msg: string }; status: number };
}) {
  if (error.response.status === 401) {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('x-auth-token');
    window.location.reload();
  }
  const errorMsg: string = error?.response?.data?.msg;
  yield put(actions.profileFailureAction(errorMsg));
}

export function* profileBackendCall() {
  try {
    const params = {
      method: 'GET',
      url: `${serverURL}/api/profiles/user`,
      headers: { 'x-auth-token': localStorage.getItem('x-auth-token') },
    };
    const response = yield call(axiosCall, params);
    yield put(
      actions.profileSuccessAction({
        username: response.data.profile.username,
        email: response.data.profile.email,
        registeredAt: response.data.profile.registeredAt,
        lastLoggedIn: response.data.profile.lastLoggedIn,
        _id: response.data.profile._id,
      }),
    );
  } catch (error) {
    yield call(handleError, error);
  }
}

export function* profileSaga() {
  yield takeLatest(actions.profileAction.type, profileBackendCall);
}
