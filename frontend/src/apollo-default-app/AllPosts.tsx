import * as React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { AllPosts as AllPostsTemplate, getAllPostsQuery } from '../components/AllPosts'
import { useTogglePublish } from './mutationsHooks'
import { PostsData } from '../model'
import { cache } from './consts'

export const ALL_POSTS_QUERY = gql`
  ${getAllPostsQuery(cache)}
`

export const AllPosts = () => {
  const { data, loading, error } = useQuery<PostsData>(ALL_POSTS_QUERY)
  const [execute] = useTogglePublish()

  const togglePublish = (id: string) => {
    execute({ variables: { id, cache } })
  }
  return <AllPostsTemplate data={data} loading={loading} error={error} togglePublish={togglePublish} />
}
