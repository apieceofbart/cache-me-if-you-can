import { useMutation, useQuery } from 'urql'
import {
  AllPostsQuery,
  CreateDraftMutation,
  PublishMutation,
  ToggleMutation,
  UnpublishMutation,
  DraftsQuery,
  PublishedQuery,
} from '../shared/graphql'
import { Cache } from '../model'
export const context = { additionalTypenames: ['Post'] }
export const usePublish = () => {
  return useMutation(PublishMutation)
}

export const useUnpublish = () => {
  return useMutation(UnpublishMutation)
}

export const useTogglePublish = () => {
  return useMutation(ToggleMutation)
}

export const useCreateDraft = () => {
  return useMutation(CreateDraftMutation)
}

export const useAllPostsQuery = (cache: Cache) => {
  return useQuery({
    query: AllPostsQuery,
    context,
    variables: {
      cache,
    },
  })
}

export const useDraftsQuery = (cache: Cache) => {
  return useQuery({
    query: DraftsQuery,
    context,
    variables: {
      cache,
    },
  })
}

export const usePublishedQuery = (cache: Cache) => {
  return useQuery({
    query: PublishedQuery,
    context,
    variables: {
      cache,
    },
  })
}
