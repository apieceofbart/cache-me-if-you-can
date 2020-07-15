import { gql, useQuery } from '@apollo/client'
import * as React from 'react'
import { Published as PublishedTemplate, getPublishedQuery } from '../shared/Published'
import { PostsData } from '../model'
import { useUnpublish } from './mutationsHooks'
import { cache } from './consts'

const PUBLISHED_QUERY = gql`
  ${getPublishedQuery(cache)}
`

export const Published = () => {
  const { data, loading, error } = useQuery<PostsData>(PUBLISHED_QUERY)

  const [executeUnpublish] = useUnpublish()

  const unpublishPost = (id: string) => {
    executeUnpublish({
      variables: {
        id,
        cache,
      },
    })
  }
  return <PublishedTemplate data={data} loading={loading} error={error} unpublishPost={unpublishPost} />
}
