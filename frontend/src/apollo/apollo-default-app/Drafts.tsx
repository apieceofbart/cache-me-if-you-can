import * as React from 'react'
import { Drafts as DraftsTemplate } from '../../shared/Drafts'
import { useDraftsQuery, usePublish } from '../graphql'
import { cache } from './consts'

export const Drafts = () => {
  const { data, loading, error } = useDraftsQuery(cache)

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
