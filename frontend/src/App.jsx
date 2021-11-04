import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';

import Home from './pages/Home';
import Login from './pages/Login';

const App = () => (
  <>
    <GlobalStyles />
    <BrowserRouter>
      <Route exact path='/' component={() => <Home />} />
      <Route path='/login' component={() => <Login />} />
    </BrowserRouter>
  </>
);

export default App;
