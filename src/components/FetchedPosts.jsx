import { useDispatch, useSelector } from 'react-redux'
import Post from './Post'
import { fetchPostsAction } from '../redux/actions'
import { Loader } from './Loader'

const FetchedPosts = () => {
  const dispatch = useDispatch()
  const { fetchedPosts } = useSelector(({ posts }) => posts)

  const { loading } = useSelector(({ app }) => app)

  if (loading) return <Loader />

  if (!fetchedPosts.length)
    return (
      <button className='btn btn-primary' onClick={() => dispatch(fetchPostsAction())}>
        Download
      </button>
    )

  return fetchedPosts.map(post => <Post post={post} key={post.id} />)
}

export default FetchedPosts
