import * as React from 'react'
import './App.css'
import { ApolloApp } from './apollo/apollo-app'
import { ApolloDefaultApp } from './apollo/apollo-default-app'
import { URQLApp } from './urql/urql-app'
import { URQLDefaultApp } from './urql/urql-default-app'
import { DelayChange } from './DelayChange/DelayChange'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <DelayChange />
      <main>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="apollo-default">Apollo default</Link>
              </li>
              <li>
                <Link to="urql-default">URQL default</Link>
              </li>
              <li>
                <Link to="apollo">Apollo</Link>
              </li>
              <li>
                <Link to="urql">URQL</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/apollo-default">
              <ApolloDefaultApp />
            </Route>
          </Switch>
          <Route path="/urql-default">
            <URQLDefaultApp />
          </Route>
          <Route path="/apollo">
            <ApolloApp />
          </Route>
          <Route path="/urql">
            <URQLApp />
          </Route>
        </Router>
      </main>
    </div>
  )
}

export default App
