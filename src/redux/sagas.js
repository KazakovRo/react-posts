import { call, put, takeEvery } from 'redux-saga/effects'
import { hideLoaderAction, showLoaderAction, showAlertAction } from './actions'
import { FETCH_POSTS, REQUESTS_POSTS } from './types'

export function* sagaWatcher() {
  yield takeEvery(REQUESTS_POSTS, sagaWorker)
}

function* sagaWorker() {
  try {
    yield put(showLoaderAction())
    const payload = yield call(fetchPostsAction)
    yield put({ type: FETCH_POSTS, payload })
    yield put(hideLoaderAction())
  } catch (e) {
    yield put(showAlertAction('Something went wrong :c'))
    yield put(hideLoaderAction())
  }
}

async function fetchPostsAction() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=7')
  return await response.json()
}
