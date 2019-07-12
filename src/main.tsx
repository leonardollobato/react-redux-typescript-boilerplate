import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
//import { createBrowserHistory } from 'history'
import { configureStore } from 'app/store'
import { App } from './app'

// prepare store
//const history = createBrowserHistory()
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
