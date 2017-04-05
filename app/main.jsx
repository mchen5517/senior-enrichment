'use strict'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Students from './components/Students';

import store from './store';
import Root from './components/Root';

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root}>
        <Router path="/students" component={Students} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)