import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Resume from './containers/Resume'
import store from './store'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import './styles/Normalise.css'
import '../node_modules/raleway-webfont/raleway.css'
import './styles/Base.css'
import './styles/Type.css'
import './styles/Helpers.css'
import './styles/Shared.css'

const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Resume}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
