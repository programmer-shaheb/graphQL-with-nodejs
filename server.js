const { ApolloServer } = require("apollo-server");
const { db } = require("./db");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Product } = require("./resolvers/Product");
const { Category } = require("./resolvers/Category");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Product,
    Category,
  },
  context: {
    db,
  },
});

server
  .listen({ port: 4000 })
  .then(({ url }) => console.log(`Server running at ${url}`));
