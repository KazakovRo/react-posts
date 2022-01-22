import { CREATE_POST, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, REQUESTS_POSTS } from './types'

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post
  }
}

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function showAlert(text) {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: text
    })

    setTimeout(() => {
      dispatch(hideAlert())
    }, 2500)
  }
}

export function hideAlert(text) {
  return {
    type: HIDE_ALERT,
    payload: text
  }
}

export function fetchPosts() {
  return {
    type: REQUESTS_POSTS
  }
}
