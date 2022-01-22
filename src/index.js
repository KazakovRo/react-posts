import React from 'react'
import ReactDOM from 'react-dom'
import './index.js'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './redux/rootReducer.js'
import thunk from 'redux-thunk'
import { forbiddenWords } from './redux/middleWare.js'
import createSagaMiddleware from '@redux-saga/core'
import { sagaWatcher } from './redux/sagas.js'

const saga = createSagaMiddleware()

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, forbiddenWords, saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

saga.run(sagaWatcher)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
