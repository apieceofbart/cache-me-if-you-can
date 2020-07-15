import * as React from 'react'
import { useQuery } from 'urql'
import { Drafts as DraftsTemplate, getDraftsQuery } from '../shared/Drafts'
import { PostsData } from '../model'
import { usePublish } from './mutationsHooks'
import { cache, context } from './consts'

export const DRAFTS_QUERY = `
  ${getDraftsQuery(cache)}
`

export const Drafts = () => {
  const [{ data, fetching, error }] = useQuery<PostsData>({ query: DRAFTS_QUERY, context })

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
