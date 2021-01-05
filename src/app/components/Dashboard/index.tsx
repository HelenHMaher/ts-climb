/**
 *
 * Dashboard
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Switch, Route } from 'react-router-dom';
import { NavBar } from '../NavBar';
import { AddExercise } from '../../containers/AddExercise';
import { Exercises } from '../../containers/Exercises';

interface Props {}

export function Dashboard(props: Props) {
  return (
    <Div>
      <NavBar />
      <Switch>
        <Route path="/dashboard/startWorkout" />
        <Route path="/dashboard/profile" />
        <Route path="/dashboard/exerciseCreator">
          <AddExercise />
          <Exercises />
        </Route>
      </Switch>
    </Div>
  );
}

const Div = styled.div``;
