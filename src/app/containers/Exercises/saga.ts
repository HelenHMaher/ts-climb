import { put, takeLatest } from 'redux-saga/effects';
import { Exercise, ExerciseType } from '../AddExercise/types';
import { actions } from './slice';

export function* fetchExercises() {
  // TODO: call the backend
  const data: Array<Exercise> = [
    {
      exerciseName: 'pull-up',
      exerciseDescription: 'You pull yourself up',
      exerciseType: ExerciseType.STRENGTH,
    },
    {
      exerciseName: 'push-up',
      exerciseDescription: 'You push yourself up',
      exerciseType: ExerciseType.STRENGTH,
    },
    {
      exerciseName: 'sit-up',
      exerciseDescription: 'You sit yourself up',
      exerciseType: ExerciseType.STRENGTH,
    },
  ];

  yield put(actions.fetchExercisesSuccess(data));
}

export function* exercisesWatcher() {
  yield takeLatest(actions.fetchExercisesAction.type, fetchExercises);
}
