import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Offers from './pages/Offers';
import About from './pages/About';
import Users from './pages/Users';
import AppLayout from './layouts/AppLayout';
import GlobalStyles from './styles/globalStyles';

const App = () => (
  <Router>
    <GlobalStyles />
    <div>
      <AppLayout>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Offers />
          </Route>
        </Switch>
      </AppLayout>
    </div>
  </Router>
);

export default App;
