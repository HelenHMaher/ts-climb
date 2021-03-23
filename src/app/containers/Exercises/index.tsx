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
import { ExerciseType, Exercise } from '../AddExercise/types';
import { ButtonChip } from '../../components/ButtonChip';

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
        {exercises?.length > 0 ? (
          <div>
            {exercises.map(ele => (
              <Instance key={ele.name}>
                <Name>{ele.name}</Name>
                <div>Type: {ExerciseType[ele.type]}</div>
                <div>Description:</div>
                <Description>{ele.description}</Description>
                <ButtonDiv>
                  <ButtonChip text="Edit" clickHandler={() => clickEdit(ele)} />
                </ButtonDiv>
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
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid var(--light-500);
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
`;

const Name = styled.div`
  font-weight: 500;
  font-size: 20px;
  margin: 10px 0px;
`;

const Description = styled.div`
  font-size: 14px;
  font-weight: 200;
  padding-left: 10px;
  padding-bottom: 10px;
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0px;
`;
