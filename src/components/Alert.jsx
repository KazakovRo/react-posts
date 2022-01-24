import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { hideAlertAction } from '../redux/actions'

const Alert = ({ text }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (text) {
      setTimeout(() => {
        dispatch(hideAlertAction())
      }, 2500)
    }
  }, [dispatch, text])

  return (
    <div className='alert alert-danger' role='alert'>
      {text}
    </div>
  )
}

export default Alert
