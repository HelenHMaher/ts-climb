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
import { selectExerciseInWorkoutToEdit } from '../WorkoutHistory/selectors';
import { editExerciseInWorkoutSaga } from './saga';

interface Props {}

export function EditExerciseInWorkout(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: editExerciseInWorkoutSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const exerciseInWorkoutToEdit = useSelector(selectExerciseInWorkoutToEdit);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const exerciseInfo =
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
      {exerciseInfo}
    </>
  );
}

const Div = styled.div``;
