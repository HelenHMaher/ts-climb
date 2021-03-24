/**
 *
 * ExerciseList
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Exercises } from '../../containers/Exercises';
import { TopNav } from '../TopNav';
import { Logout } from '../../containers/Logout';
import { Button } from '../Button';
import { useHistory } from 'react-router-dom';

interface Props {}

export function ExerciseList(props: Props) {
  const history = useHistory();
  return (
    <Div>
      <Button
        buttonStyle="solid"
        buttonSize="large"
        title="Create Exercise"
        clickHandler={() => history.push('/dashboard/exerciseCreator')}
      />
      <TopNav
        back={true}
        title="Exercises"
        leftButton={null}
        rightButton={<Logout />}
      />
      <Exercises />
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
