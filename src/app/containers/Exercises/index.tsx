/**
 *
 * Exercises
 *
 */

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { actions as editExerciseActions } from '../EditExercise/slice';
import { selectExercises } from './selectors';
import { exercisesWatcher } from './saga';
import { translations } from 'locales/translations';
import { ExerciseType, Exercise } from '../AddExercise/types';

interface Props {}

export function Exercises(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: exercisesWatcher });

  const exercises = useSelector(selectExercises);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const history = useHistory();

  const clickEdit = (exercise: Exercise): void => {
    dispatch(actions.editExerciseAction(exercise));
    dispatch(editExerciseActions.editDisplayAction('true'));
    history.push('/dashboard/exerciseEditor');
  };

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
              <Instance key={ele.name}>
                <div>{ele.name}</div>
                <div>{ExerciseType[ele.type]}</div>
                <div>{ele.description}</div>
                <Edit onClick={() => clickEdit(ele)}>Edit</Edit>
              </Instance>
            ))}
          </div>
        ) : null}
      </Div>
    </>
  );
}

const Div = styled.div``;

const Instance = styled.div`
  margin: 20px 0px;
`;

const Edit = styled.button``;
