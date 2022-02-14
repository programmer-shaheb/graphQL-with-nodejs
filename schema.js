const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    getProduct(id: ID!): Product
    getProducts: [Product!]!
    categories: [Category!]!
    category(id: ID!): Category
  }
  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
    categoryId: String!
    category: Category
  }
  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }
`;
