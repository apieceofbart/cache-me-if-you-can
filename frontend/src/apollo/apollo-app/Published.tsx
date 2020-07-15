import * as React from 'react'
import { Published as PublishedTemplate } from '../../shared/Published'
import { usePublishedQuery, useUnpublish } from '../graphql'
import { cache } from './consts'

export const Published = () => {
  const { data, loading, error } = usePublishedQuery()

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
