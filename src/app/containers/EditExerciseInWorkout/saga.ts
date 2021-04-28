import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import axios from 'axios';
import { ExerciseInWorkout } from './types';

const serverURL = process.env.REACT_APP_SERVER;

export const axiosCall = (params: any) => axios({ ...params });

export function* handleErrorDelete(error: {
  response: { data: { msg: string } };
}) {
  const errorMsg: string = error?.response?.data?.msg;
  yield put(actions.deleteExerciseInWorkoutFailureAction(errorMsg));
}

export function* handleError(error: { response: { data: { msg: string } } }) {
  const errorMsg: string = error?.response?.data?.msg;
  yield put(actions.editExerciseInWorkoutFailureAction(errorMsg));
}

export function* editExerciseInWorkoutBackendCall(
  action: PayloadAction<{
    workoutId: string;
    exerciseInstanceId: string;
    exercise: ExerciseInWorkout;
  }>,
) {
  try {
    const params = {
      method: 'PATCH',
      url: `${serverURL}/api/exerciseInWorkout/updateExerciseInWorkout`,
      headers: { 'x-auth-token': localStorage.getItem('x-auth-token') },
      data: action.payload,
    };
    const response = yield call(axiosCall, params);
    yield put(actions.editExerciseInWorkoutSuccessAction(response.data.msg));
  } catch (error) {
    yield call(handleError, error);
  }
}

export function* deleteExerciseInWorkoutBackendCall(
  action: PayloadAction<{ workoutId: string; exerciseInstanceId: string }>,
) {
  try {
    const params = {
      method: 'PATCH',
      url: `${serverURL}/api/exerciseInWorkout/deleteExerciseInWorkout`,
      headers: { 'x-auth-token': localStorage.getItem('x-auth-token') },
      data: action.payload,
    };
    const response = yield call(axiosCall, params);
    yield put(actions.deleteExerciseInWorkoutSuccessAction(response.data.msg));
  } catch (error) {
    yield call(handleErrorDelete, error);
  }
}

/**
 * This is watching for actions, and then calling a subsequent function with that action
 */
export function* editExerciseInWorkoutSaga() {
  yield takeLatest(
    actions.editExerciseInWorkoutAction.type,
    editExerciseInWorkoutBackendCall,
  );
  yield takeLatest(
    actions.deleteExerciseInWorkoutAction.type,
    deleteExerciseInWorkoutBackendCall,
  );
}
