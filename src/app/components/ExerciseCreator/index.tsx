/**
 *
 * ExerciseCreator
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { TopNav } from '../TopNav';
import { AddExercise } from '../../containers/AddExercise';
import { Exercises } from '../../containers/Exercises';
import { Logout } from '../../containers/Logout';

interface Props {}

export function ExerciseCreator(props: Props) {
  return (
    <Div>
      <TopNav
        back={true}
        title="Exercise Creator"
        leftButton={null}
        rightButton={<Logout />}
      />
      <Content>
        <AddExercise />
        <Exercises />
      </Content>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const Content = styled.div`
  padding: 80px 0px;
`;