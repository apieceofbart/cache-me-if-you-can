import * as React from 'react'

import { createClient, Provider } from 'urql'
import { AllPosts } from './AllPosts'
import { Published } from './Published'
import { Drafts } from './Drafts'
import { CreateDraft } from './CreateDraft'
import { url } from '../../consts'

const client = createClient({
  url,
})

export const URQLDefaultApp = () => {
  return (
    <Provider value={client}>
      <div>
        <h2>URQL default Client *</h2>
        <AllPosts />
        <Drafts />
        <Published />
        <CreateDraft />
        <h2>Summary</h2>
        <p>
          Acts as "refetchQueries" in apollo by default but no need to specify queries list. <br />
          (*) Works across all queries as long as they don't return empty results or after applying{' '}
          <a href="https://formidable.com/open-source/urql/docs/basics/document-caching/#document-cache-gotchas">fix</a>
        </p>
      </div>
    </Provider>
  )
}
