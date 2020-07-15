import * as React from 'react'
import { gql, useQuery } from '@apollo/client'
import { AllPosts as AllPostsTemplate, ALL_POSTS_QUERY } from '../shared/AllPosts'
import { useTogglePublish } from './mutationsHooks'
import { PostsData } from '../model'
import { cache } from './consts'

export const ALL_POSTS_QUERY_GQL = gql(ALL_POSTS_QUERY)

export const AllPosts = () => {
  const { data, loading, error } = useQuery<PostsData>(ALL_POSTS_QUERY_GQL, {
    variables: {
      cache,
    },
  })
  const [execute] = useTogglePublish()

  const togglePublish = (id: string) => {
    execute({ variables: { id, cache } })
  }
  return <AllPostsTemplate data={data} loading={loading} error={error} togglePublish={togglePublish} />
}
