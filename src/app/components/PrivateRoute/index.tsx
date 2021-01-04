import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface Props {
  children;
  path;
}

export function PrivateRoute(props: Props) {
  return (
    <Route
      path={props.path}
      render={({ location }) => {
        return localStorage.getItem('isAuthenticated') === 'true' ? (
          props.children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}
