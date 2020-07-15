import * as React from 'react'

interface CreateDraftProps {
  executeMutation: (postTitle: string) => void
  loading: boolean
  error?: {
    message: string
  }
}

export const CreateDraft = ({ error, loading, executeMutation }: CreateDraftProps) => {
  const inputRef = React.createRef<HTMLInputElement>()

  const createDraft = () => {
    if (inputRef.current?.value) {
      executeMutation(inputRef.current?.value)
    }
  }

  if (error) {
    return <span>Error!</span>
  }
  if (loading) {
    return <span>Loading...</span>
  }
  return (
    <div>
      <h3>Create draft</h3>
      <input ref={inputRef} />
      <button onClick={createDraft}>Create</button>
    </div>
  )
}
