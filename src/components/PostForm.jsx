import React from 'react'
import { connect } from 'react-redux'
import { createPost, showAlert } from '../redux/actions'
import Alert from './Alert'

class PostForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: ''
    }
  }

  submitHandler = e => {
    e.preventDefault()

    const { title } = this.state

    if (!title.trim()) return this.props.showAlert('Title of post must contain at least 1 symbol')

    const newPost = {
      title,
      id: Date.now().toString()
    }

    console.log(this.state.title, newPost)
    this.props.createPost(newPost)
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
      <form onSubmit={this.submitHandler} style={{ margin: '40px 0' }}>
        {this.props.alert && <Alert text={this.props.alert} />}

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

const mapDispatchToProps = {
  createPost,
  showAlert
}

const mapStateToProps = state => ({
  alert: state.app.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
