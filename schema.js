const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    getProduct(id: ID!): Product
    getProducts: [Product!]!
    categories: [Category!]!
    category(id: ID!): Category
    reviews: [Review!]!
    review(id: ID!): Review
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
    review: [Review]
  }
  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }
  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: String!
  }
`;
