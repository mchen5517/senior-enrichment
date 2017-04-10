'use strict'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { fetchStudents } from './redux/students';
import { fetchCampuses } from './redux/campuses';

import store from './store';
import Root from './components/Root';
import Students from './components/Students';
import Student from './components/Student';
import Campuses from './components/Campuses';
import Campus from './components/Campus';
import Home from './components/Home';

const fetchAll = function() {
  store.dispatch(fetchStudents());
  store.dispatch(fetchCampuses());
};

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root} onEnter={fetchAll}>
        <IndexRoute component={Home} />
        <Route path="/students" component={Students} />
        <Route path="/students/:id" component={Student} />
        <Route path="/campuses" component={Campuses} />
        <Route path="/campuses/:id" component={Campus} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);


