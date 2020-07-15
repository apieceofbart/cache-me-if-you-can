import { useMutation } from 'urql'
import { CreateDraftMutation, PublishMutation, ToggleMutation, UnpublishMutation } from '../shared/mutationsHooks'
import { cache } from './consts'

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
