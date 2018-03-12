import { GraphQLServer } from 'graphql-yoga'

const typeDefs = `
  type Query {
    beerMe(name: String): String!
  }
`

const resolvers = {
  Query: {
    beerMe: (_:any, { name }:any) => `Beer ${name || 'Served'}`,
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))