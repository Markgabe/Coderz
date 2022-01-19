import React, { useContext } from 'react';
import { Route, Redirect, Router } from 'react-router-dom';

import Loader from 'react-loader-spinner';

import history from './history';

import { Context } from './contexts/AuthContext';

import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import Challenge from './pages/Challenge';
import ChallengeSelection from './pages/ChallengeSelection';
import Rank from './pages/Rank';

function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return (
      <Loader
        type='Oval'
        color='#00BFFF'
        height={100}
        width={100}
        timeout={3000}
      />
    );
  }

  if (isPrivate && !authenticated) return <Redirect to='/login' />;

  return <Route {...rest} />;
}

export default function Routes() {
  return (
    <Router history={history}>
      <CustomRoute isPrivate exact path='/' component={HomePage} />
      <CustomRoute path='/login' component={Login} />
      <CustomRoute path='/register' component={Register} />
      <CustomRoute
        isPrivate
        exact
        path='/challenge'
        component={ChallengeSelection}
      />
      <CustomRoute isPrivate path='/challenge/:id' component={Challenge} />
      <CustomRoute isPrivate path='/rank' component={Rank} />
    </Router>
  );
}
