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
import { ExerciseCreator } from '../ExerciseCreator';
import { NotFoundPage } from '../NotFoundPage/Loadable';
import { Profile } from '../../containers/Profile';
import { Logout } from '../../containers/Logout';

interface Props {}

export function Dashboard(props: Props) {
  return (
    <Div>
      <NavBar />
      <Switch>
        <Route exact path="/dashboard/profile">
          <Profile />
        </Route>
        <Route exact path="/dashboard/exerciseCreator">
          <ExerciseCreator />
        </Route>
      </Switch>
      <TopNav
        back={true}
        title="My Daily Climb"
        leftButton={null}
        rightButton={<Logout />}
      />
      <NotFoundPage />
    </Div>
  );
}

const Div = styled.div``;
