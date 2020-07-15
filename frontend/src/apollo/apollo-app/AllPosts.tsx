import * as React from 'react'
import { AllPosts as AllPostsTemplate } from '../../shared/AllPosts'
import { useAllPostsQuery, useTogglePublish } from '../graphql'
import { cache } from './consts'

export const AllPosts = () => {
  const { data, loading, error } = useAllPostsQuery(cache)
  const [execute] = useTogglePublish()

  const togglePublish = (id: string) => {
    execute({ variables: { id, cache } })
  }
  return <AllPostsTemplate data={data} loading={loading} error={error} togglePublish={togglePublish} />
}
