import React from 'react';
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

const withFilters = mockStore.map((offer) => {
  const languages = offer.languages ? [...offer.languages] : [];
  const tools = offer.tools ? [...offer.tools] : [];
  return {
    ...offer,
    filtrable: [
      offer.role && offer.role,
      offer.level,
      offer.contract,
      offer.location,
      ...languages,
      ...tools,
    ],
  };
});

const store = createStore(reducers, {
  original: withFilters,
  filtered: withFilters,
  filters: [],
});

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
