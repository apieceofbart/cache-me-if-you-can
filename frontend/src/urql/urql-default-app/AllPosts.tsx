import * as React from 'react'
import { useQuery } from 'urql'
import { PostsData } from '../../model'
import { useTogglePublish, useAllPostsQuery } from '../graphql'
import { AllPosts as AllPostsTemplate } from '../../shared/AllPosts'
import { cache, context } from './consts'

export const AllPosts = () => {
  const [{ data, fetching, error }] = useAllPostsQuery()

  const [, executeTogglePublished] = useTogglePublish()

  const togglePublish = (id: string) => {
    executeTogglePublished({ id, cache })
  }

  return <AllPostsTemplate data={data} loading={fetching} error={error} togglePublish={togglePublish} />
}
