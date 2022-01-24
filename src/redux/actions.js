import { CREATE_POST, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, REQUESTS_POSTS } from './types'

const createPostAction = post => ({
  type: CREATE_POST,
  payload: post
})

const showLoaderAction = () => ({
  type: SHOW_LOADER
})

const hideLoaderAction = () => ({
  type: HIDE_LOADER
})

const showAlertAction = text => ({
  type: SHOW_ALERT,
  payload: text
})

const hideAlertAction = text => ({
  type: HIDE_ALERT,
  payload: text
})

const fetchPostsAction = () => ({
  type: REQUESTS_POSTS
})

export { createPostAction, showLoaderAction, hideLoaderAction, showAlertAction, hideAlertAction, fetchPostsAction }
