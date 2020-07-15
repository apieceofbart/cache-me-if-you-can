import * as React from 'react'
import { AllPosts as AllPostsTemplate } from '../../shared/AllPosts'
import { useAllPostsQuery, useTogglePublish } from '../graphql'
import { cache } from './consts'

export const AllPosts = () => {
  const [{ data, fetching, error }] = useAllPostsQuery()

  const [, executeTogglePublished] = useTogglePublish()

  const togglePublish = (id: string) => {
    executeTogglePublished({ id, cache })
  }

  return <AllPostsTemplate data={data} loading={fetching} error={error} togglePublish={togglePublish} />
}
