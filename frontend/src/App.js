import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';

import Home from './pages/Home';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Route
          exact
          path = "/"
          component = {() => <Home />}
        />
      </BrowserRouter>
    </>
  )
}

export default App;
