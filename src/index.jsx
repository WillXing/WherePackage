import React from 'react'
import { render } from 'react-dom'
import { createStore } from "redux"
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import { applyMiddleware } from "redux"
import thunk from "redux-thunk"

import reducer from './reducer'

import Home from './home/Home.jsx'

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Home}/>
    </Router>
  </Provider>,
  document.getElementById('app')
)