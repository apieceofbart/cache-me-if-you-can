import * as React from 'react'
import { PostsData, Cache } from '../model'

interface AllPostsProps {
  data?: PostsData
  loading: boolean
  error?: {
    message: string
  }
  togglePublish: (id: string) => void
}

export const ALL_POSTS_QUERY = `query AllPosts($cache: Cache!) {
    posts (cache: $cache) {
      id
      title
      published
    }
  }
`

export const AllPosts = ({ data, loading, error, togglePublish }: AllPostsProps) => {
  if (error) {
    return <span>Error! {JSON.stringify(error, null, 2)}</span>
  }
  if (loading) {
    return <span>Loading...</span>
  }
  return (
    <div>
      <h3>All Posts</h3>
      <small>Click on post to toggle publish property</small>
      <ol>
        {data?.posts.map((post) => (
          <li key={post.id} onClick={() => togglePublish(post.id)}>
            {post.title}{' '}
            {!post.published && <span style={{ padding: '3px', background: '#ccf', borderRadius: '5px' }}>DRAFT</span>}
          </li>
        ))}
      </ol>
    </div>
  )
}
