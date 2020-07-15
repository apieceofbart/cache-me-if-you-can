# What is it?

Think of this repo as a [TODO MVC](http://todomvc.com/) but for graphql react client cache.
The idea is to compare different caching strategies accross different libraries.
This project started as I was frustrated with the way apollo cache works out of the box, despite claiming it can replace local state managements.

# What libs are included

So far only, apollo and urql are included and only their default behaviour. I plan to add more examples from those libs as well as adding new libs (relay)

# How to run

This project consist of two parts: frontend and backend.

## Backend

The backend is a [Nexus](https://www.nexusjs.org/#/README) graphql server with [Prisma](http://prisma.io/) backend - the database is in memory, at least for now.

To run backend:

```
cd backend && npm run dev
```

## Frontend

Frontend is a create-react-app. To run it:

```
cd frontend && npm run start
```
