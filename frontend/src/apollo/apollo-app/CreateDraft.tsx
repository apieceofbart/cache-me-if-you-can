import * as React from 'react'

import { CreateDraft as CreateDraftTemplate } from '../../shared/CreateDraft'
import { useCreateDraft } from '../graphql'
import { cache } from './consts'

export const CreateDraft = () => {
  const [executeMutation, { loading, error }] = useCreateDraft()

  const createDraft = (title: string) => {
    executeMutation({
      variables: {
        title,
        cache,
      },
    })
  }

  return <CreateDraftTemplate error={error} loading={loading} executeMutation={createDraft} />
}
