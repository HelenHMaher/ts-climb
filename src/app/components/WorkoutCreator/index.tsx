/**
 *
 * WorkoutCreator
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';

import { TopNav } from '../TopNav';
import { AddWorkout } from '../../containers/AddWorkout';
import { Logout } from '../../containers/Logout';

interface Props {}

export function WorkoutCreator(props: Props) {
  return (
    <Div>
      <TopNav
        back={false}
        title="My Daily Climb"
        leftButton={null}
        rightButton={<Logout />}
      />
      <Content>
        <AddWorkout />
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
  padding: 100px 0px;
`;
