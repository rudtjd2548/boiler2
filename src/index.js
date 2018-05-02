import 'core-js/es6/map'
import 'core-js/es6/set'
import 'raf/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

import Root from './Root'



ReactDOM.render (<Root />, document.getElementById('main'))
if (module.hot) {
  module.hot.accept()
}
