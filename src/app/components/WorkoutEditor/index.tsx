/**
 *
 * WorkoutEditor
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { TopNav } from '../TopNav';
import { EditWorkout } from '../../containers/EditWorkout';

interface Props {}

export function WorkoutEditor(props: Props) {
  return (
    <Div>
      <TopNav
        title="Workout Editor"
        back
        leftButton={null}
        rightButton={null}
      />
      <Content>
        <EditWorkout />
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
