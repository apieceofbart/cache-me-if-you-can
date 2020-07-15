import { useMutation } from 'urql'
import {
  getPublishMutation,
  getUnpublishMutation,
  getToggleMutation,
  getCreateDraftMutation,
} from '../shared/mutationsHooks'
import { cache } from './consts'

const PUBLISH_POST = getPublishMutation()

const UNPUBLISH_POST = getUnpublishMutation(cache)

const TOGGLE_PUBLISHED = getToggleMutation(cache)

const CREATE_DRAFT = getCreateDraftMutation(cache)

export const usePublish = () => {
  return useMutation(PUBLISH_POST)
}

export const useUnpublish = () => {
  return useMutation(UNPUBLISH_POST)
}

export const useTogglePublish = () => {
  return useMutation(TOGGLE_PUBLISHED)
}

export const useCreateDraft = () => {
  return useMutation(CREATE_DRAFT)
}
