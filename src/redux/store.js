import thunk from 'redux-thunk'
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from '@redux-saga/core'

import { rootReducer } from './rootReducer.js'
import { forbiddenWords } from './middleWare.js'
import { sagaWatcher } from './sagas.js'

const saga = createSagaMiddleware()

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, forbiddenWords, saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

saga.run(sagaWatcher)

export default store
