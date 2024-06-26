import React from 'react'
import { Provider } from 'react-redux'

import ReactDOM from 'react-dom/client'

import './firebase'
import './index.scss'

import { App } from './App'
import { store } from './app/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
