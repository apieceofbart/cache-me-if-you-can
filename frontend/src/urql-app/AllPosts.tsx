import * as React from 'react'
import { useQuery } from 'urql'
import { PostsData } from '../model'
import { useTogglePublish } from './mutationsHooks'
import { AllPosts as AllPostsTemplate, getAllPostsQuery } from '../components/AllPosts'
import { cache } from './consts'

export const ALL_POSTS_QUERY = getAllPostsQuery(cache)

export const AllPosts = () => {
  const [{ data, fetching, error }] = useQuery<PostsData>({ query: ALL_POSTS_QUERY })

  const [, executeTogglePublished] = useTogglePublish()

  const togglePublish = (id: string) => {
    executeTogglePublished({ id, cache })
  }

  return <AllPostsTemplate data={data} loading={fetching} error={error} togglePublish={togglePublish} />
}
