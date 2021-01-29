import { put, takeLatest, call } from 'redux-saga/effects';
// import { Exercise, ExerciseType } from '../AddExercise/types';
import { actions } from './slice';
import axios from 'axios';

const serverURL = process.env.REACT_APP_SERVER;

export const axiosCall = (params: any) => axios({ ...params });

export function* handleError(error: { response: { data: { msg: string } } }) {
  const errorMsg: string = error?.response?.data?.msg;
  yield put(actions.fetchExercisesFailure(errorMsg));
}

export function* fetchExercises() {
  const params = {
    url: `${serverURL}/api/exercises/allExercises`,
    method: 'GET',
    withCredentials: true,
  };

  try {
    const response = yield call(axiosCall, params);

    if (response?.data?.exercises) {
      yield put(actions.fetchExercisesSuccess(response.data.exercises));
    }
    yield call(handleError, {
      response: { data: { msg: 'no exercises found' } },
    });
  } catch (error) {
    yield call(handleError, error);
  }
}

export function* exercisesWatcher() {
  yield takeLatest(actions.fetchExercisesAction.type, fetchExercises);
}
