import { GraphQLServer } from 'graphql-yoga'
import { IResolvers } from "graphql-yoga/dist/src/types";

const typeDefs = `
  type Query {
    beerMe(name: String): String!
  }
`

const resolvers: IResolvers =  {
  Query: {
    beerMe: (_, { name }) => `Beer ${name || 'Served'}`,
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))