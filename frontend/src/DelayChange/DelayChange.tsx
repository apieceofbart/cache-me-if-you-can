import * as React from 'react'
import { url } from '../consts'

/* why not go crazy here and use native fetch for graphql? */

export const DelayChange = () => {
  const [delay, setDelay] = React.useState(0)

  const changeDelay = async () => {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        operationName: null,
        variables: {
          delay: delay === 0 ? 500 : 0,
        },
        query: `mutation SetDelay($delay: Int!) {
          setDelay(delay: $delay) {
            delay
          }
        }
             
      `,
      }),
    })

    const parsed = await res.json()
    setDelay(parsed.data.setDelay.delay)
  }
  const fetchDelay = async () => {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        operationName: null,
        variables: {},
        query: `{
        settings {
          delay
        }
      }      
      `,
      }),
    })

    const parsed = await res.json()
    setDelay(parsed.data.settings.delay)
  }

  React.useEffect(() => {
    fetchDelay()
  }, [])

  return (
    <label>
      Add 500 ms delay to each request
      <input type="checkbox" checked={delay !== 0} onChange={changeDelay} />
    </label>
  )
}
