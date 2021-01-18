/**
 *
 * Dashboard
 *
 */
import * as React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { NavBar } from '../NavBar';
import { TopNav } from '../TopNav';
import { ExerciseCreator } from '../ExerciseCreator';
import { NotFoundPage } from '../NotFoundPage/Loadable';
import { Profile } from '../../containers/Profile';
import { Logout } from '../../containers/Logout';

interface Props {}

export function Dashboard(props: Props) {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/dashboard/profile" component={Profile} />
        <Route path="/dashboard/exerciseCreator" component={ExerciseCreator} />
        <Route path="/dashboard">
          <TopNav
            back={true}
            title="My Daily Climb"
            leftButton={null}
            rightButton={<Logout />}
          />
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}
