/**
 *
 * Dashboard
 *
 */
import * as React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { NavBar } from '../NavBar';

import { ExerciseCreator } from '../ExerciseCreator';

// import { NotFoundPage } from '../NotFoundPage/Loadable';
import { Profile } from '../../containers/Profile';
import { WorkoutHistory } from '../../containers/WorkoutHistory';
import { ExerciseEditor } from '../ExerciseEditor';
import { ExerciseList } from '../ExerciseList';
import { WorkoutCreator } from '../WorkoutCreator';

interface Props {}

export function Dashboard(props: Props) {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/dashboard/profile" component={Profile} />
        <Route path="/dashboard/workoutHistory" component={WorkoutHistory} />
        <Route path="/dashboard/exerciseCreator" component={ExerciseCreator} />
        <Route path="/dashboard/exerciseEditor" component={ExerciseEditor} />
        <Route path="/dashboard/exerciseList" component={ExerciseList} />
        <Route path="/dashboard" component={WorkoutCreator} />
      </Switch>
    </Router>
  );
}
