/**
 *
 * Exercises
 *
 */

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectExercises } from './selectors';
import { exercisesWatcher } from './saga';
import { translations } from 'locales/translations';
import { ExerciseType } from '../AddExercise/types';

interface Props {}

export function Exercises(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: exercisesWatcher });

  const exercises = useSelector(selectExercises);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchExercisesAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Div>
        <h1>{t(translations.exercises)}</h1>
        {exercises?.length > 0 ? (
          <div>
            {exercises.map(ele => (
              <>
                <div>{ele.exerciseName}</div>
                <div>{ExerciseType[ele.exerciseType]}</div>
                <div>{ele.exerciseDescription}</div>
              </>
            ))}
          </div>
        ) : null}
      </Div>
    </>
  );
}

const Div = styled.div``;
