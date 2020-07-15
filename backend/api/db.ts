// TODO this is duplicated in frontend
export type Cache = 'apollo' | 'urql' | 'apolloDefault' | 'urqlDefault'

type Post = {
  id: number
  title: string
  published: boolean
}

export type DB = {
  posts: {
    [key in Cache]: Post[]
  }
  settings: {
    delay: number
  }
}

export const db: DB = {
  posts: {
    apolloDefault: [
      { id: 1, title: 'Apollo default First!', published: false },
      { id: 2, title: 'Apollo default another one', published: true },
    ],
    apollo: [
      { id: 1, title: 'Apollo First!', published: false },
      { id: 2, title: 'Apllo another one', published: true },
    ],
    urql: [
      { id: 1, title: 'URQL First!', published: false },
      { id: 2, title: 'URQL another one', published: true },
    ],
    urqlDefault: [
      { id: 1, title: 'URQL default First!', published: false },
      { id: 2, title: 'URQL default another one', published: true },
    ],
  },
  settings: {
    delay: 1000,
  },
}
