import * as React from 'react'
import './App.css'
import { ApolloApp } from './apollo-app'
import { ApolloDefaultApp } from './apollo-default-app'
import { URQLApp } from './urql-app'
import { URQLDefaultApp } from './urql-default-app'
import { DelayChange } from './DelayChange/DelayChange'

function App() {
  return (
    <div className="App">
      <DelayChange />
      <ApolloDefaultApp />
      <URQLDefaultApp />
      <ApolloApp />
      <URQLApp />
    </div>
  )
}

export default App
