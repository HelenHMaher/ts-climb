import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

// import { HomePage } from './containers/HomePage/Loadable';
import { useTranslation } from 'react-i18next';
import { Dashboard } from './components/Dashboard';
import { ConstructionNotice } from './containers/ConstructionNotice';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './containers/Login';
import { Register } from './containers/Register';

export function App() {
  const { i18n } = useTranslation();
  return (
    <Router>
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
        <Route path="/dashboard">
          <Dashboard />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>
        <Route path="/">
          <ConstructionNotice />
          <Login />
        </Route>
      </Switch>

      <GlobalStyle />
    </Router>
  );
}
