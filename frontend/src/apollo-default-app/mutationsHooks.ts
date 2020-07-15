import { useMutation, gql } from '@apollo/client'
import { PublishMutation, UnpublishMutation, ToggleMutation, CreateDraftMutation } from '../shared/mutationsHooks'

const PUBLISH_POST_GQL = gql(PublishMutation)

const UNPUBLISH_POST_GQL = gql(UnpublishMutation)

const TOGGLE_PUBLISHED_GQL = gql(ToggleMutation)

const CREATE_DRAFT_GQL = gql(CreateDraftMutation)

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
