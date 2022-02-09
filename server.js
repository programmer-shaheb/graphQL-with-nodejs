const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    greeting: String
    wedding: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => "Hello Boy!",
    wedding: () => "Call The API!",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen({ port: 4000 })
  .then(({ url }) => console.log(`Server running at ${url}`));
