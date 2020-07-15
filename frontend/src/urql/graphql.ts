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
import { cache } from '../apollo/apollo-app/consts'
import { context } from './urql-default-app/consts'

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

export const useAllPostsQuery = () => {
  return useQuery({
    query: AllPostsQuery,
    context,
    variables: {
      cache,
    },
  })
}

export const useDraftsQuery = () => {
  return useQuery({
    query: DraftsQuery,
    context,
    variables: {
      cache,
    },
  })
}

export const usePublishedQuery = () => {
  return useQuery({
    query: PublishedQuery,
    context,
    variables: {
      cache,
    },
  })
}
