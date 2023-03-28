const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID!
    email: String!
    firstName: String!
    lastName: String!
    username: String!
    password: String!
    address: [String]!
    accessLvl: Int!
    orders: [Orders]
}

type Product {
    _id: ID!
    productId: Int!
    name: String
    price: Float!
    tags: [String]
    category: [Category]
    image: String
    description: String
}

type Order {
    productId: []
    orderDate: Date
    orderPrice: Date
    status: String!
}

type Auth {
    token: ID
    user: User
  }

  type Checkout {
    session: ID
  }
`

module.exports = typeDefs;