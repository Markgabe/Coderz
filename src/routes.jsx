import React, { useContext } from 'react';
import { Route, Redirect, Router } from 'react-router-dom';
import history from './history';

import { Context } from './contexts/AuthContext';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Challenge from './pages/Challenge';

function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(Context);

  if (loading) return <></>;
  if (isPrivate && !authenticated) return <Redirect to='/login' />;

  return <Route {...rest} />;
}

export default function Routes() {
  return (
    <Router history={history}>
      <CustomRoute isPrivate exact path='/' component={Home} />
      <CustomRoute path='/login' component={Login} />
      <CustomRoute path='/register' component={Register} />
      <CustomRoute isPrivate path='/challenge/:id' component={Challenge} />
    </Router>
  );
}
