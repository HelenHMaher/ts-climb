/**
 *
 * ExerciseEditor
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { TopNav } from '../TopNav';
import { EditExercise } from '../../containers/EditExercise';

interface Props {}

export function ExerciseEditor(props: Props) {
  return (
    <Div>
      <TopNav
        title="Exercise Editor"
        back
        leftButton={null}
        rightButton={null}
      />
      <Content>
        <EditExercise />
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
