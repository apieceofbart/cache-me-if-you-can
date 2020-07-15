// TODO: get from backend

export type Cache = 'apollo' | 'urql' | 'apolloDefault' | 'urqlDefault'

export interface Post {
  id: string
  title: string
  published: boolean
  cache: Cache
}

export interface PostsData {
  posts: Post[]
}
