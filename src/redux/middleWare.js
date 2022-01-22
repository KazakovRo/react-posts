import { showAlert } from './actions'
import { CREATE_POST } from './types'

const forbidden = ['spam', 'bad title', 'sonblade']

export function forbiddenWords({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_POST) {
        const foundForbiddenWord = forbidden.filter(word => action.payload.title.includes(word))
        if (foundForbiddenWord.length) return dispatch(showAlert('This title rejected'))
      }
      return next(action)
    }
  }
}
