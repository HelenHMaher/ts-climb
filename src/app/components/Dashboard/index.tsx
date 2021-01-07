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
import { Profile } from '../../containers/Profile';
import { Logout } from '../../containers/Logout';

interface Props {}

export function Dashboard(props: Props) {
  return (
    <Div>
      <NavBar />
      <Switch>
        <Route path="/dashboard/startWorkout" />
        <Route path="/dashboard/profile">
          <Profile />
        </Route>
        <Route path="/dashboard/exerciseCreator">
          <AddExercise />
          <Exercises />
        </Route>
        <TopNav
          back={true}
          title="Register"
          leftButton={null}
          rightButton={<Logout />}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </Div>
  );
}

const Div = styled.div``;
