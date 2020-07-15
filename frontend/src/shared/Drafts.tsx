import * as React from 'react'
import { Post, Cache } from '../model'

interface DraftsProps {
  data?: {
    posts: Post[]
  }
  loading: boolean
  error?: {
    message: string
  }
  publishPost: (id: string) => void
}

export const getDraftsQuery = (cache: Cache) => `
  {
    posts (published: false, cache: ${cache}) {
      id
      title
      published
    }
  }
`

export const Drafts = ({ data, error, loading, publishPost }: DraftsProps) => {
  if (error) {
    return <span>Error!</span>
  }
  if (loading) {
    return <span>Loading...</span>
  }

  return (
    <div>
      <h3>Drafts</h3>
      <small>Click on post title to publish it</small>
      <ol>
        {data?.posts.map((post) => (
          <li key={post.id} onClick={() => publishPost(post.id)}>
            {post.title}
          </li>
        ))}
      </ol>
    </div>
  )
}
