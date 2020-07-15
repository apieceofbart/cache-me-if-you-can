import { useMutation, gql, useQuery } from '@apollo/client'
import {
  PublishMutation,
  UnpublishMutation,
  ToggleMutation,
  CreateDraftMutation,
  DraftsQuery,
  AllPostsQuery,
  PublishedQuery,
} from '../shared/graphql'
import { PostsData } from '../model'
import { cache } from './apollo-app/consts'

const PUBLISH_POST_GQL = gql(PublishMutation)

const UNPUBLISH_POST_GQL = gql(UnpublishMutation)

const TOGGLE_PUBLISHED_GQL = gql(ToggleMutation)

const CREATE_DRAFT_GQL = gql(CreateDraftMutation)

const DRAFTS_QUERY_GQL = gql(DraftsQuery)

const ALL_POSTS_QUERY_GQL = gql(AllPostsQuery)

const PUBLISHED_QUERY_GQL = gql(PublishedQuery)

export const usePublish = () => {
  return useMutation(PUBLISH_POST_GQL)
}

export const useUnpublish = () => {
  return useMutation(UNPUBLISH_POST_GQL)
}

export const useTogglePublish = () => {
  return useMutation(TOGGLE_PUBLISHED_GQL)
}

export const useCreateDraft = () => {
  return useMutation(CREATE_DRAFT_GQL)
}

export const useDraftsQuery = () => {
  return useQuery<PostsData>(DRAFTS_QUERY_GQL, {
    variables: {
      cache,
    },
  })
}

export const useAllPostsQuery = () => {
  return useQuery<PostsData>(ALL_POSTS_QUERY_GQL, {
    variables: {
      cache,
    },
  })
}

export const usePublishedQuery = () => {
  return useQuery<PostsData>(PUBLISHED_QUERY_GQL, {
    variables: {
      cache,
    },
  })
}
