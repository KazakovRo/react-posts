import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { createPostAction, showAlertAction } from '../redux/actions'
import Alert from './Alert'

const PostForm = () => {
  const [title, setTitle] = useState('')

  const { alert } = useSelector(({ app }) => app)
  const dispatch = useDispatch()

  const submitHandler = e => {
    e.preventDefault()

    if (!title.trim()) return dispatch(showAlertAction('Title of post must contain at least 1 symbol'))

    const newPost = {
      title,
      id: Date.now().toString()
    }

    console.log(title, newPost)
    dispatch(createPostAction(newPost))
    setTitle('')
  }

  return (
    <form onSubmit={submitHandler} style={{ margin: '40px 0' }}>
      {alert && <Alert text={alert} />}

      <div className='form-group'>
        <label htmlFor='title'>Post title</label>
        <input
          type='text'
          className='form-control'
          id='title'
          value={title}
          name='title'
          onChange={({ target: { value } }) => setTitle(value)}
        />
      </div>
      <button className='btn btn-success' type='submit'>
        Create
      </button>
    </form>
  )
}

export default PostForm
