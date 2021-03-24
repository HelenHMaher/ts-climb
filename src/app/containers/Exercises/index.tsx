/**
 *
 * Exercises
 *
 */

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { actions as editExerciseActions } from '../EditExercise/slice';
import { selectExercises } from './selectors';
import { exercisesWatcher } from './saga';
import { Exercise, ExerciseType } from '../AddExercise/types';

import { ExerciseEntry } from './ExerciseEntry';

interface Props {}

export function Exercises(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: exercisesWatcher });
  const [typeToDisplay, setTypeToDisplay] = useState<ExerciseType | ''>('');

  const exercises = useSelector(selectExercises);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const history = useHistory();

  const clickType = (type: ExerciseType | '') => {
    if (typeToDisplay === type) {
      setTypeToDisplay('');
    } else {
      setTypeToDisplay(type);
    }
  };

  // eslint-disable-next-line array-callback-return
  const exerciseTypeOptions = Object.keys(ExerciseType).map(x => {
    if (!isNaN(Number(x))) {
      return (
        <Tab
          type={typeToDisplay}
          value={ExerciseType[x]}
          key={ExerciseType[x]}
          onClick={() => clickType(ExerciseType[x])}
        >
          {ExerciseType[x]}
        </Tab>
      );
    }
  });

  const exercisesToDisplay =
    typeToDisplay === ''
      ? exercises
      : exercises.filter(
          x => Number(x.type) === Number(ExerciseType[typeToDisplay]),
        );

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
    <Div>
      <FilterBar>{exerciseTypeOptions}</FilterBar>
      {exercisesToDisplay?.length > 0 ? (
        <ExerciseDisplay>
          {exercisesToDisplay.map(ele => (
            <ExerciseEntry
              key={ele._id}
              exercise={ele}
              clickHandler={() => clickEdit(ele)}
            />
          ))}
        </ExerciseDisplay>
      ) : (
        <ExerciseDisplay></ExerciseDisplay>
      )}
    </Div>
  );
}

const Div = styled.div``;

const ExerciseDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Tab = styled.div<{ type: ExerciseType | ''; value: ExerciseType | '' }>`
  width: 100px;
  padding: 5px;
  color: ${props =>
    props.type === props.value ? 'var(--main-200)' : 'var(--light-100)'};
  background: ${props =>
    props.type === props.value ? 'var(--aux-100)' : 'var(--main-200)'};
`;

const FilterBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  overflow: hidden;
  margin: 10px;
`;
