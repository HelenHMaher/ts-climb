import * as React from 'react';
import styled from 'styled-components/macro';

import { ExerciseType, Exercise } from '../AddExercise/types';
import { ButtonChip } from '../../components/ButtonChip';

interface Props {
  exercise: Exercise;
  clickHandler: () => void;
}

export function ExerciseEntry(props: Props) {
  return (
    <Instance key={props.exercise.name}>
      <Name>{props.exercise.name}</Name>
      <div>Type: {ExerciseType[props.exercise.type]}</div>
      <div>Description:</div>
      <Description>{props.exercise.description}</Description>
      <ButtonDiv>
        <ButtonChip text="Edit" clickHandler={props.clickHandler} />
      </ButtonDiv>
    </Instance>
  );
}

const Instance = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid var(--light-500);
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
`;

const Name = styled.div`
  font-weight: 500;
  font-size: 20px;
  margin: 10px 0px;
`;

const Description = styled.div`
  font-size: 14px;
  font-weight: 200;
  padding-left: 10px;
  padding-bottom: 10px;
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0px;
`;
