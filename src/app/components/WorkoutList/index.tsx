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
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
