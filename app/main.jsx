'use strict'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { fetchStudents } from './redux/students';

import store from './store';
import Root from './components/Root';
import Students from './components/Students';

const fetchAll = function() {
  store.dispatch(fetchStudents());
};

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root} onEnter={fetchAll}>
        <Route path="/students" component={Students} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);


