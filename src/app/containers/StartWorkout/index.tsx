/**
 *
 * StartWorkout
 *
 */

import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectStartWorkout } from './selectors';
import { startWorkoutSaga } from './saga';
import { messages } from './messages';

interface Props {}

export function StartWorkout(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: startWorkoutSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const startWorkout = useSelector(selectStartWorkout);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Div>
        {t('')}
        {/*  {t(...messages.someThing)}  */}
      </Div>
    </>
  );
}

const Div = styled.div``;
