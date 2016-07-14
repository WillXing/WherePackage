import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import Home from './home/Home.jsx'

render(<Router history={hashHistory}>
  <Route path="/" component={Home}/>
</Router>, document.getElementById('app'))