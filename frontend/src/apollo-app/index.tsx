import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

import * as React from 'react'
import { AllPosts } from './AllPosts'
import { CreateDraft } from './CreateDraft'
import { Drafts } from './Drafts'
import { Published } from './Published'
import { url } from '../consts'

const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
})

export const ApolloApp = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>Apollo Client</h2>
        <AllPosts />
        <Drafts />
        <Published />
        <CreateDraft />
        <h2>Summary</h2>
        <p>Manual update of each query</p>
      </div>
    </ApolloProvider>
  )
}
