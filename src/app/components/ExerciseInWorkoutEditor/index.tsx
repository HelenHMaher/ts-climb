/**
 *
 * ExerciseInWorkoutEditor
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { TopNav } from '../TopNav';
import { EditExerciseInWorkout } from '../../containers/EditExerciseInWorkout';

interface Props {}

export function ExerciseInWorkoutEditor(props: Props) {
  return (
    <Div>
      <TopNav
        title="Exercise in Workout Editor"
        back
        leftButton={null}
        rightButton={null}
      />
      <Content>
        <EditExerciseInWorkout />
      </Content>
    </Div>
  );
}

const Div = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const Content = styled.div`
  padding: 80px 0px;
`;
