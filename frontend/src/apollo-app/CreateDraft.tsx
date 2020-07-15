import * as React from 'react'
import { ALL_POSTS_QUERY } from './AllPosts'
import { PostsData } from '../model'

import { CreateDraft as CreateDraftTemplate } from '../components/CreateDraft'
import { useCreateDraft } from './mutationsHooks'
import { cache } from './consts'

export const CreateDraft = () => {
  const [executeMutation, { loading, error }] = useCreateDraft()

  const createDraft = (title: string) => {
    executeMutation({
      variables: {
        title,
        cache,
      },
      update: (proxy, mutationResults) => {
        const cachedDrafts = proxy.readQuery<PostsData>({ query: ALL_POSTS_QUERY })

        const newDraft = mutationResults.data

        if (newDraft && cachedDrafts) {
          proxy.writeQuery<PostsData>({
            query: ALL_POSTS_QUERY,
            data: { posts: [...cachedDrafts.posts, newDraft.createDraft] },
          })
        }
      },
    })
  }

  return <CreateDraftTemplate error={error} loading={loading} executeMutation={createDraft} />
}
