import { Cache } from '../model'

export const getPublishMutation = (cache: Cache) => `
  mutation Publish($id: Int!, $cache: Cache!) {
    publish(id: $id, cache: $cache) {
      id
      title
      published
    }
  }
`

export const getUnpublishMutation = (cache: Cache) => `
  mutation Unublish($id: Int!, $cache: Cache!) {
    unpublish(id: $id, cache: $cache) {
      id
      title
      published
    }
  }
`

export const getToggleMutation = (cache: Cache) => `
  mutation TogglePublished($id: Int!, $cache: Cache!) {
    togglePublished(id: $id, cache: $cache) {
      id
      title
      published
    }
  }
`

export const getCreateDraftMutation = (cache: Cache) => `
  mutation CreateDraft($title: String!, $cache: Cache!) {
    createDraft(title: $title, cache: $cache) {
      id
      title
      published
    }
  }
`
