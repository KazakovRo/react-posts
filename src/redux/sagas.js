import { call, put, takeEvery } from 'redux-saga/effects'
import { hideLoader, showLoader, showAlert } from './actions'
import { FETCH_POSTS, REQUESTS_POSTS } from './types'

export function* sagaWatcher() {
  yield takeEvery(REQUESTS_POSTS, sagaWorker)
}

function* sagaWorker() {
  try {
    yield put(showLoader())
    const payload = yield call(fetchPosts)
    yield put({ type: FETCH_POSTS, payload })
    yield put(hideLoader())
  } catch (e) {
    yield put(showAlert('Something went wrong :c'))
    yield put(hideLoader())
  }
}

async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=7')
  return await response.json()
}
