/**
 *
 * Dashboard
 *
 */
import * as React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { NavBar } from '../NavBar';
import styled from 'styled-components';

import { Profile } from '../../containers/Profile';

import { ExerciseCreator } from '../ExerciseCreator';
import { ExerciseEditor } from '../ExerciseEditor';
import { ExerciseList } from '../ExerciseList';

import { WorkoutCreator } from '../WorkoutCreator';
import { WorkoutEditor } from '../WorkoutEditor';
import { WorkoutList } from '../WorkoutList';

import { DashboardInjector } from '../../containers/DashboardInjector';

import { EditExerciseInWorkout } from 'app/containers/EditExerciseInWorkout';

interface Props {}

export function Dashboard(props: Props) {
  return (
    <Div>
      <DashboardInjector />
      <Router>
        <NavBar />
        <Switch>
          <Route path="/dashboard/profile" component={Profile} />
          <Route path="/dashboard/workoutEditor" component={WorkoutEditor} />
          <Route
            path="/dashboard/exerciseInWorkoutEditor"
            component={EditExerciseInWorkout}
          />
          <Route path="/dashboard/workoutHistory" component={WorkoutList} />
          <Route
            path="/dashboard/exerciseCreator"
            component={ExerciseCreator}
          />
          <Route path="/dashboard/exerciseEditor" component={ExerciseEditor} />
          <Route path="/dashboard/exerciseList" component={ExerciseList} />
          <Route path="/dashboard" component={WorkoutCreator} />
        </Switch>
      </Router>
    </Div>
  );
}

const Div = styled.div`
  width: 100vw;
`;
