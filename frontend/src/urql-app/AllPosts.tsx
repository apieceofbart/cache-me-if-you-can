import * as React from 'react'
import { useQuery } from 'urql'
import { PostsData } from '../model'
import { useTogglePublish } from './mutationsHooks'
import { AllPosts as AllPostsTemplate, ALL_POSTS_QUERY } from '../shared/AllPosts'
import { cache } from './consts'

export const AllPosts = () => {
  const [{ data, fetching, error }] = useQuery<PostsData>({
    query: ALL_POSTS_QUERY,
    variables: {
      cache,
    },
  })

  const [, executeTogglePublished] = useTogglePublish()

  const togglePublish = (id: string) => {
    executeTogglePublished({ id, cache })
  }

  return <AllPostsTemplate data={data} loading={fetching} error={error} togglePublish={togglePublish} />
}
