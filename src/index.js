import 'core-js/es6/map'
import 'core-js/es6/set'
import 'raf/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from 'src/store'

import Root from './Root'

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('main')
);

if (module.hot) {
  module.hot.accept()
}
