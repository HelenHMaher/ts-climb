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
      <EditExercise />
    </Div>
  );
}

const Div = styled.div``;
