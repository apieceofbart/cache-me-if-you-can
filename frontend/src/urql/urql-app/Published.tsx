import * as React from 'react'
import { Published as PublishedTemplate } from '../../shared/Published'
import { usePublishedQuery, useUnpublish } from '../graphql'
import { cache } from './consts'

export const Published = () => {
  const [{ data, fetching, error }] = usePublishedQuery(cache)

  const [, executeUnpublish] = useUnpublish()

  const unpublishPost = (id: string) => {
    executeUnpublish({
      id,
      cache,
    })
  }
  return <PublishedTemplate data={data} loading={fetching} error={error} unpublishPost={unpublishPost} />
}
