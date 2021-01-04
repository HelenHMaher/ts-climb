import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

// import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { NavBar } from './components/NavBar';
import { AddExercise } from './containers/AddExercise';
import { Exercises } from './containers/Exercises';
import { ConstructionNotice } from './containers/ConstructionNotice';
import { PrivateRoute } from './components/PrivateRoute';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - My Daily Climb"
        defaultTitle="My Daily Climb"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta
          name="description"
          content="a web app for rock climbers to track their daily workout"
        />
      </Helmet>
      <Switch>
        <PrivateRoute path="/dashboard">
          <NavBar />
          <Route path="/dashboard/startWorkout" />
          <Route path="/dashboard/profile" />
          <Route path="/dashboard/exerciseCreator">
            <AddExercise />
            <Exercises />
          </Route>
        </PrivateRoute>

        <Route exact path="/register"></Route>
        <Route path="/">
          <ConstructionNotice />
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
