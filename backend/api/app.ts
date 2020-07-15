import { schema, settings, server } from 'nexus'
import { db } from './db'
import * as cors from 'cors'

settings.change({
  schema: {
    generateGraphQLSDLFile: 'schema.graphql',
  },
})

server.express.use(cors())

schema.addToContext(() => {
  return {
    db,
  }
})
