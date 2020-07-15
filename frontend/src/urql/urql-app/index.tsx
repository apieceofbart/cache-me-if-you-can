import * as React from 'react'

import { createClient, Provider, dedupExchange, fetchExchange } from 'urql'
import { cacheExchange } from '@urql/exchange-graphcache'
import { AllPosts } from './AllPosts'
import { Published } from './Published'
import { Drafts } from './Drafts'
import { CreateDraft } from './CreateDraft'
import { Post } from '../../model'
import { url } from '../../consts'
import { AllPostsQuery } from '../../shared/graphql'

const client = createClient({
  url,
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          togglePublished: (result, args, cache, info) => {
            console.log(cache)
            cache.updateQuery({ query: AllPostsQuery }, (data) => {
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
        <p>TODO: add manual updates or optimistic updates</p>
      </div>
    </Provider>
  )
}
