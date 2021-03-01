/**
 *
 * WorkoutHistory
 *
 */

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { TopNav } from '../../components/TopNav';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectWorkoutHistory } from './selectors';
import { workoutHistorySaga } from './saga';
import { Exercise } from '../AddExercise/types';
interface Props {}

export function WorkoutHistory(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: workoutHistorySaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const workoutHistory = useSelector(selectWorkoutHistory);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const workout = [
    { date: '1.23.2021', name: 'run', exercises: [], notes: '' },
    {
      date: '1.25.2021',
      name: 'calesthetics',
      exercises: [
        {
          name: 'push-up',
          description: 'push up from the floor',
          type: 0,
        },
      ],
      notes: '',
    },
  ];

  const exerciseItems = (x: Array<Exercise>) =>
    x.length < 1 ? (
      <div>none</div>
    ) : (
      x.map(exercise => <li>{exercise.name}</li>)
    );

  const workoutEntries = workout.map(x => (
    <WorkoutEntries>
      <div>Date: {x.date}</div>
      <div>Name: {x.name}</div>
      <div>Exercises:</div>
      <ol>{exerciseItems(x.exercises)}</ol>
    </WorkoutEntries>
  ));

  return (
    <>
      <Div>
        <TopNav
          back={true}
          title="Workout History"
          leftButton={null}
          rightButton={null}
        />
        {workoutEntries}
      </Div>
    </>
  );
}

const Div = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WorkoutEntries = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid var(--light-500);
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
`;
