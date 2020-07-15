import * as React from 'react'
import { Post, Cache } from '../model'

interface PublishedProps {
  data?: {
    posts: Post[]
  }
  loading: boolean
  error?: {
    message: string
  }
  unpublishPost: (id: string) => void
}

export const Published = ({ data, error, loading, unpublishPost }: PublishedProps) => {
  if (error) {
    return <span>Error!</span>
  }
  if (loading) {
    return <span>Loading...</span>
  }
  return (
    <div>
      <h3>Published</h3>
      <small>Click on post title to unpublish it</small>
      <ol>
        {data?.posts.map((post) => (
          <li key={post.id} onClick={() => unpublishPost(post.id)}>
            {post.title}
          </li>
        ))}
      </ol>
    </div>
  )
}
