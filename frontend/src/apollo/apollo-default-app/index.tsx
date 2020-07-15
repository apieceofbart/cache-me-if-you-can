import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import * as React from 'react'
import { AllPosts } from './AllPosts'
import { CreateDraft } from './CreateDraft'
import { Drafts } from './Drafts'
import { Published } from './Published'
import { url } from '../../consts'

const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
})

export const ApolloDefaultApp = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>Apollo Client - Default</h2>
        <AllPosts />
        <Drafts />
        <Published />
        <CreateDraft />
        <h2>Summary</h2>
        <p>
          Does almost fucking nothing by default. Toggling the post updates all posts query. That's all. <br />
          Adding a new draft post doesn't update any of the queries. Publishing/unpublishing posts doesn't affect the
          Drafts and Published queries.
        </p>
      </div>
    </ApolloProvider>
  )
}
