import React from 'react'

export default class PostForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: ''
    }
  }

  submitHandler = e => {
    e.preventDefault()

    const { title } = this.state

    const newPost = {
      title,
      id: Date.now().toString()
    }

    console.log(this.state.title, newPost)

    this.setState({ title: '' })
  }

  changeInputHandler = e => {
    e.persist()
    this.setState(prevState => ({
      ...prevState,
      ...{
        [e.target.name]: e.target.value
      }
    }))
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className='form-group'>
          <label htmlFor='title'>Post title</label>
          <input
            type='text'
            className='form-control'
            id='title'
            value={this.state.title}
            name='title'
            onChange={this.changeInputHandler}
          />
        </div>
        <button className='btn btn-success' type='submit'>
          Create
        </button>
      </form>
    )
  }
}
