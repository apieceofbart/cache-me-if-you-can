import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import {
  getPublishMutation,
  getUnpublishMutation,
  getToggleMutation,
  getCreateDraftMutation,
} from '../components/mutationsHooks'
import { cache } from './consts'

const PUBLISH_POST = gql`
  ${getPublishMutation(cache)}
`

const UNPUBLISH_POST = gql`
  ${getUnpublishMutation(cache)}
`
const TOGGLE_PUBLISHED = gql`
  ${getToggleMutation(cache)}
`

const CREATE_DRAFT = gql`
  ${getCreateDraftMutation(cache)}
`

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
