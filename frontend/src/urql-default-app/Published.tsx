import * as React from 'react'
import { useQuery } from 'urql'
import { Published as PublishedTemplate, getPublishedQuery } from '../shared/Published'
import { PostsData } from '../model'
import { useUnpublish } from './mutationsHooks'
import { cache, context } from './consts'

const PUBLISHED_QUERY = `
  ${getPublishedQuery(cache)}
`

export const Published = () => {
  const [{ data, fetching, error }] = useQuery<PostsData>({ query: PUBLISHED_QUERY, context })

  const [, executeUnpublish] = useUnpublish()

  const unpublishPost = (id: string) => {
    executeUnpublish({
      id,
      cache,
    })
  }
  return <PublishedTemplate data={data} loading={fetching} error={error} unpublishPost={unpublishPost} />
}
