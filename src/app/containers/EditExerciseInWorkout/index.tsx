/**
 *
 * EditExerciseInWorkout
 *
 */

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import {
  selectExerciseInWorkoutToEdit,
  selectWorkoutToEdit,
} from '../WorkoutHistory/selectors';
import { selectExercises } from '../Exercises/selectors';
import { ExerciseType } from '../AddExercise/types';
import { editExerciseInWorkoutSaga } from './saga';

interface Props {}

export function EditExerciseInWorkout(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: editExerciseInWorkoutSaga });

  const exerciseInWorkoutToEdit = useSelector(selectExerciseInWorkoutToEdit);
  const workout = useSelector(selectWorkoutToEdit);
  const exercise = useSelector(selectExercises).find(
    x => exerciseInWorkoutToEdit?.id === x._id,
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const workoutInfo =
    workout != null ? (
      <div>
        <div>workout name: {workout.name}</div>
        <div>date: {workout.date}</div>
      </div>
    ) : (
      <></>
    );

  const exerciseInfo =
    exercise != null ? (
      <div>
        <div>exercise name: {exercise.name}</div>
        <div>description: {exercise.description}</div>
        <div>type: {ExerciseType[exercise.type]}</div>
      </div>
    ) : (
      <></>
    );

  const exerciseInstanceInfo =
    exerciseInWorkoutToEdit != null ? (
      Object.keys(exerciseInWorkoutToEdit).map(x => {
        return (
          <div key={x}>
            {x}: {exerciseInWorkoutToEdit[x]}
          </div>
        );
      })
    ) : (
      <></>
    );

  return (
    <>
      <Div>Edit Exercise In Workout</Div>
      {workoutInfo}
      {exerciseInfo}
      {exerciseInstanceInfo}
    </>
  );
}

const Div = styled.div``;
