// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

interface PrivateRouteProps {
  component: any;
  [key: string]: any;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const token = localStorage.getItem('userAuthenticated');
  return (
    <Route
      {...rest}
      render={(props) =>
        token && token.length ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  );
};

