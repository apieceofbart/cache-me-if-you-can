import { useQuery, gql } from '@apollo/client'
import * as React from 'react'
import { Drafts as DraftsTemplate, getDraftsQuery } from '../shared/Drafts'
import { PostsData } from '../model'
import { usePublish } from './mutationsHooks'
import { cache } from './consts'

export const DRAFTS_QUERY = gql`
  ${getDraftsQuery(cache)}
`

export const Drafts = () => {
  const { data, loading, error } = useQuery<PostsData>(DRAFTS_QUERY)

  const [executePublish] = usePublish()

  const publishPost = (id: string) => {
    executePublish({
      variables: {
        id,
        cache,
      },
    })
  }

  if (error) {
    return <span>Error!</span>
  }
  if (loading) {
    return <span>Loading...</span>
  }

  return <DraftsTemplate data={data} loading={loading} error={error} publishPost={publishPost} />
}
