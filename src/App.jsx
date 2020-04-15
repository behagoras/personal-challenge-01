import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
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
            <Home />
          </Route>
        </Switch>
      </AppLayout>
    </div>
  </Router>
);

export default App;
