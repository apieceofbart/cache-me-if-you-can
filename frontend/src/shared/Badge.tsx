import * as React from 'react'

export const Badge: React.FC = ({ children }) => {
  return <span style={{ padding: '3px', background: '#ccf', borderRadius: '5px' }}>{children}</span>
}
