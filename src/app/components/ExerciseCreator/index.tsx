/**
 *
 * ExerciseCreator
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { TopNav } from '../TopNav';
import { AddExercise } from '../../containers/AddExercise';

interface Props {}

export function ExerciseCreator(props: Props) {
  return (
    <Div>
      <TopNav
        back={true}
        title="Exercise Creator"
        leftButton={null}
        rightButton={null}
      />
      <Content>
        <AddExercise />
      </Content>
    </Div>
  );
}

const Div = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const Content = styled.div`
  padding: 80px 0px;
`;
