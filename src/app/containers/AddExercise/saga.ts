import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { Exercise } from './types';

export function* addExerciseBackendCall(action: PayloadAction<Exercise>) {
  console.log('action is: ', action);

  // TODO: make real backend call here
  action.payload.exerciseName === 'push-up'
    ? yield put(actions.addExerciseFailureAction())
    : yield put(actions.addExerciseSuccessAction());
}

/**
 * This is watching for actions, and then calling a subsequent function with that action
 */
export function* addExerciseSaga() {
  yield takeLatest(actions.addExerciseAction.type, addExerciseBackendCall);
}
