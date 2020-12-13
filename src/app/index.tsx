/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

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
      <NavBar />
      <Switch>
        <Route exact path="/addExercise" component={AddExercise} />
        <Route exact path="/exercises" component={Exercises} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
