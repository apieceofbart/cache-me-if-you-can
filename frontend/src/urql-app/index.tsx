import * as React from 'react'

import { createClient, Provider, dedupExchange, fetchExchange } from 'urql'
import { cacheExchange } from '@urql/exchange-graphcache'
import { AllPosts, ALL_POSTS_QUERY } from './AllPosts'
import { Published } from './Published'
import { Drafts } from './Drafts'
import { CreateDraft } from './CreateDraft'
import { Post } from '../model'
import { url } from '../consts'

const client = createClient({
  url,
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          togglePublished: (result, args, cache, info) => {
            console.log(cache)
            cache.updateQuery({ query: ALL_POSTS_QUERY }, (data) => {
              if (data && data.posts) {
                const posts: Post[] = data.posts as Post[]
                posts.map((post: Post) => {
                  if (post.id === args.id) {
                    return { ...post, published: !post.published }
                  }
                  return post
                })
                data.posts = posts
                console.log(posts)
              }

              console.log(data?.posts)
              return data
            })
          },
        },
      },
    }),
    fetchExchange,
  ],
})

export const URQLApp = () => {
  return (
    <Provider value={client}>
      <div>
        <h2>URQL Client</h2>
        <AllPosts />
        <Drafts />
        <Published />
        <CreateDraft />
        <h2>Summary</h2>
        <p>
          Acts as "refetchQueries" by default, works across all queries as long as they don't return empty results.{' '}
          <a href="https://formidable.com/open-source/urql/docs/basics/document-caching/#document-cache-gotchas">Fix</a>
        </p>
      </div>
    </Provider>
  )
}
