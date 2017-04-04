'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import store from './store'
import Root from './components/Root'

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root}>

      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)