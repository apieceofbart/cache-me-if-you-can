export const PublishMutation = `
  mutation Publish($id: Int!, $cache: Cache!) {
    publish(id: $id, cache: $cache) {
      id
      title
      published
    }
  }
`

export const UnpublishMutation = `
  mutation Unublish($id: Int!, $cache: Cache!) {
    unpublish(id: $id, cache: $cache) {
      id
      title
      published
    }
  }
`

export const ToggleMutation = `
  mutation TogglePublished($id: Int!, $cache: Cache!) {
    togglePublished(id: $id, cache: $cache) {
      id
      title
      published
    }
  }
`

export const CreateDraftMutation = `
  mutation CreateDraft($title: String!, $cache: Cache!) {
    createDraft(title: $title, cache: $cache) {
      id
      title
      published
    }
  }
`

export const DraftsQuery = `
  query Drafts ($cache: Cache!) {
    posts (published: false, cache: $cache) {
      id
      title
      published
    }
  }
`

export const AllPostsQuery = `query AllPosts($cache: Cache!) {
  posts (cache: $cache) {
    id
    title
    published
  }
}
`
export const PublishedQuery = `
  query Published ($cache: Cache! ) {
   posts (published: true, cache: $cache) {
      id
      title
      published
    }
  }
`
