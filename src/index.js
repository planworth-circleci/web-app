import './bootstrap'
import React from 'react'
import { hydrate, render } from 'react-dom'
import './styles/baseline.css'
import './styles/animate.css'
import Routes from './Routes'
// import * as serviceWorker from './serviceWorker'

const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrate(<Routes />, rootElement)
} else {
  render(<Routes />, rootElement)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister()
