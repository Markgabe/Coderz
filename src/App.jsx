import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { GlobalStyles } from './styles/GlobalStyles';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => (
  <>
    <GlobalStyles />
    <BrowserRouter>
      <Route exact path='/' component={() => <Home />} />
      <Route path='/login' component={() => <Login />} />
      <Route path='/register' component={() => <Register />} />
    </BrowserRouter>
    <ToastContainer />
  </>
);

export default App;
