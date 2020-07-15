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
          Works fine by default, all of the queries are updated after each mutation without any custom code needed (*){' '}
          <br />
          Acts as "refetchQueries" in apollo by default but no need to specify queries list - all of the queries are
          updated automatically <br />
          Of course it's not a production ready solution - if you add a delay from server response you can see it takes
          time to update the views. <br />
          So still have to use optimistic updates or update cache manually <br />
          (*) Works across all queries as long as they don't return empty results. I have added a
          <a href="https://formidable.com/open-source/urql/docs/basics/document-caching/#document-cache-gotchas">fix</a>
        </p>
      </div>
    </Provider>
  )
}
