import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import mockStore from './mocks/data.json';
import reducers from './reducers';

import Offers from './pages/Offers';
import About from './pages/About';
import Users from './pages/Users';
import AppLayout from './layouts/AppLayout';
import GlobalStyles from './styles/globalStyles';

const store = createStore(reducers, { original: mockStore, filtered: mockStore });

const App = () => {

  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
