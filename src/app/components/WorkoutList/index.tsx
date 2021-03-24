/**
 *
 * WorkoutList
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';

import { TopNav } from '../TopNav';
import { WorkoutHistory } from '../../containers/WorkoutHistory';

interface Props {}

export function WorkoutList(props: Props) {
  return (
    <Div>
      {' '}
      <TopNav
        back={true}
        title="Workout History"
        leftButton={null}
        rightButton={null}
      />
      <WorkoutHistory />
    </Div>
  );
}

const Div = styled.div`
  padding: 100px 0px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
