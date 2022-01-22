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

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, forbiddenWords),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

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
