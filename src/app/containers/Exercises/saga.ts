import { put, takeLatest, call } from 'redux-saga/effects';
// import { Exercise, ExerciseType } from '../AddExercise/types';
import { actions } from './slice';
import axios from 'axios';

export const axiosCall = params => axios({ ...params });

export function* fetchExercises() {
  const params = { url: '/api/exercises', method: 'GET' };

  try {
    const response = yield call(axiosCall, params);

    if (response?.data?.exercises) {
      yield put(actions.fetchExercisesSuccess(response.data.exercises));
    } else {
      yield put(actions.fetchExercisesFailure());
    }
  } catch (error) {
    yield put(actions.fetchExercisesFailure());
  }
}

export function* exercisesWatcher() {
  yield takeLatest(actions.fetchExercisesAction.type, fetchExercises);
}
