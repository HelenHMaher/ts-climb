/**
 *
 * Dashboard
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Switch, Route } from 'react-router-dom';
import { NavBar } from '../NavBar';
import { TopNav } from '../TopNav';
import { AddExercise } from '../../containers/AddExercise';
import { Exercises } from '../../containers/Exercises';
import { NotFoundPage } from '../NotFoundPage/Loadable';
import { Logout } from '../../containers/Logout';

interface Props {}

export function Dashboard(props: Props) {
  return (
    <Div>
      <TopNav
        back={true}
        title="Register"
        leftButton={null}
        rightButton={<Logout />}
      />
      <NavBar />
      <Switch>
        <Route path="/dashboard/startWorkout" />
        <Route path="/dashboard/profile" />
        <Route path="/dashboard/exerciseCreator">
          <AddExercise />
          <Exercises />
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
    </Div>
  );
}

const Div = styled.div``;
