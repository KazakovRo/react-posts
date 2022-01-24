import { useSelector } from 'react-redux'
import Post from './Post'

const Posts = () => {
  const { posts } = useSelector(({ posts }) => posts)

  if (!posts.length) return <p className='text-center'>Posts not found yet</p>

  return posts.map(post => <Post post={post} key={post.id} />)
}

export default Posts
