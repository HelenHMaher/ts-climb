/**
 *
 * EditExercise
 *
 */

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectEditExercise } from './selectors';
import { editExerciseSaga } from './saga';

interface Props {}

export function EditExercise(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: editExerciseSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const editExercise = useSelector(selectEditExercise);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Div></Div>
    </>
  );
}

const Div = styled.div``;
