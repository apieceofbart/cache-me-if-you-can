import * as React from 'react'
import { Drafts as DraftsTemplate } from '../../shared/Drafts'
import { usePublish, useDraftsQuery } from '../graphql'
import { cache } from './consts'

export const Drafts = () => {
  const [{ data, fetching, error }] = useDraftsQuery()

  const [, executePublish] = usePublish()

  const publishPost = (id: string) => {
    executePublish({
      id,
      cache,
    })
  }
  if (error) {
    return <span>Error!</span>
  }
  if (fetching) {
    return <span>Loading...</span>
  }
  return <DraftsTemplate data={data} loading={fetching} error={error} publishPost={publishPost} />
}
