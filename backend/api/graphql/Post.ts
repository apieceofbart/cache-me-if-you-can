import { schema } from 'nexus'
import { enumType } from 'nexus/components/schema'
import { DB, Cache } from '../db'

const CacheType = enumType({
  name: 'Cache',
  members: ['apolloDefault', 'apollo', 'urql', 'urqlDefault'],
})

const getPostsByCache = (db: DB, cache: Cache) => db.posts[cache]

const pause = (ms: number = 1000) => new Promise((res) => setTimeout(res, ms))

schema.objectType({
  name: 'Post',
  definition(t) {
    t.int('id')
    t.string('title')
    t.field('cache', {
      type: CacheType,
    })
    t.boolean('published')
  },
})

schema.extendType({
  type: 'Query',
  definition(t) {
    t.field('drafts', {
      args: {
        cache: schema.arg({
          type: CacheType,
          required: true,
        }),
      },
      nullable: false,
      type: 'Post',
      list: true,
      async resolve(_root, args, ctx) {
        await pause(ctx.db.settings.delay)
        return getPostsByCache(ctx.db, args.cache).filter((p) => p.published === false)
      },
    })
  },
})

schema.extendType({
  type: 'Query',
  definition(t) {
    t.field('published', {
      args: {
        cache: schema.arg({
          type: CacheType,
          required: true,
        }),
      },
      nullable: false,
      type: 'Post',
      list: true,
      async resolve(_root, args, ctx) {
        await pause(ctx.db.settings.delay)
        return getPostsByCache(ctx.db, args.cache).filter((p) => p.published === true)
      },
    })
  },
})

schema.extendType({
  type: 'Query',
  definition(t) {
    t.field('posts', {
      nullable: false,
      type: 'Post',
      args: {
        published: schema.booleanArg({ required: false }),
        cache: schema.arg({
          type: CacheType,
          required: true,
        }),
      },
      list: true,
      async resolve(_root, args, ctx) {
        await pause(ctx.db.settings.delay)
        if (args.published !== undefined) {
          return getPostsByCache(ctx.db, args.cache).filter((post) => post.published === args.published)
        }
        return getPostsByCache(ctx.db, args.cache)
      },
    })
  },
})

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createDraft', {
      type: 'Post',
      args: {
        title: schema.stringArg({ required: true }),
        cache: schema.arg({
          type: CacheType,
          required: true,
        }),
      },
      async resolve(_root, args, ctx) {
        await pause(ctx.db.settings.delay)
        const draft = {
          id: getPostsByCache(ctx.db, args.cache).length + 1,
          title: args.title,
          published: false,
        }
        getPostsByCache(ctx.db, args.cache).push(draft)
        return draft
      },
    })
  },
})

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.field('publish', {
      type: 'Post',
      args: {
        id: schema.intArg({ required: true }),
        cache: schema.arg({
          type: CacheType,
          required: true,
        }),
      },
      async resolve(_root, args, ctx) {
        await pause(ctx.db.settings.delay)
        let draftToPublish = getPostsByCache(ctx.db, args.cache).find((p) => p.id === args.id)

        if (!draftToPublish) {
          throw new Error('Could not find draft with id ' + args.id)
        }

        draftToPublish.published = true

        return draftToPublish
      },
    })
  },
})

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.field('unpublish', {
      type: 'Post',
      args: {
        id: schema.intArg({ required: true }),
        cache: schema.arg({
          type: CacheType,
          required: true,
        }),
      },
      async resolve(_root, args, ctx) {
        await pause(ctx.db.settings.delay)
        let draftToPublish = getPostsByCache(ctx.db, args.cache).find((p) => p.id === args.id)

        if (!draftToPublish) {
          throw new Error('Could not find draft with id ' + args.id)
        }

        draftToPublish.published = false

        return draftToPublish
      },
    })
  },
})

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.field('togglePublished', {
      type: 'Post',
      args: {
        id: schema.intArg({ required: true }),
        cache: schema.arg({
          type: CacheType,
          required: true,
        }),
      },
      async resolve(_root, args, ctx) {
        await pause(ctx.db.settings.delay)
        let draftToPublish = getPostsByCache(ctx.db, args.cache).find((p) => p.id === args.id)

        if (!draftToPublish) {
          throw new Error('Could not find draft with id ' + args.id)
        }

        draftToPublish.published = !draftToPublish.published

        return draftToPublish
      },
    })
  },
})
