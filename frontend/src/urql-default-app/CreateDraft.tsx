import * as React from 'react'

import { CreateDraft as CreateDraftTemplate } from '../shared/CreateDraft'
import { useCreateDraft } from './mutationsHooks'
import { cache } from './consts'

export const CreateDraft = () => {
  const [{ fetching, error }, executeMutation] = useCreateDraft()

  const createDraft = (title: string) => {
    executeMutation({
      title,
      cache,
    })
  }

  return <CreateDraftTemplate error={error} loading={fetching} executeMutation={createDraft} />
}
