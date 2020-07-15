import { schema } from 'nexus'

schema.objectType({
  name: 'Settings',
  definition(t) {
    t.int('delay')
  },
})

schema.extendType({
  type: 'Query',
  definition(t) {
    t.field('settings', {
      nullable: false,
      type: 'Settings',
      resolve(_root, args, ctx) {
        return ctx.db.settings
      },
    })
  },
})

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.field('setDelay', {
      type: 'Settings',
      args: {
        delay: schema.intArg({ required: true }),
      },
      resolve(_root, args, ctx) {
        ctx.db.settings.delay = args.delay

        return ctx.db.settings
      },
    })
  },
})
