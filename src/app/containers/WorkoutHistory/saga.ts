import { put, takeLatest, call } from 'redux-saga/effects';
import { actions } from './slice';
import axios from 'axios';

const serverURL = process.env.REACT_APP_SERVER;

export const axiosCall = (params: any) => axios({ ...params });

export function* handleError(error: { response: { data: { msg: string } } }) {
  const errorMsg: string = error?.response?.data?.msg;
  yield put(actions.fetchWorkoutsFailure(errorMsg));
}

export function* fetchWorkouts() {
  const params = {
    url: `${serverURL}/api/workouts/allWorkouts`,
    method: 'GET',
    headers: { 'x-auth-token': localStorage.getItem('x-auth-token') },
  };

  try {
    const response = yield call(axiosCall, params);

    if (response?.data?.workouts) {
      yield put(actions.fetchWorkoutsSuccess(response.data.workouts));
    }
  } catch (error) {
    yield call(handleError, error);
  }
}

export function* workoutHistorySaga() {
  yield takeLatest(actions.fetchWorkoutsAction.type, fetchWorkouts);
}
