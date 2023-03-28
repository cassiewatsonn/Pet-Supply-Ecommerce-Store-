const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID!
    email: String!
    firstName: String!
    lastName: String!
    username: String!
    password: String!
    phone: String!
    address: [Address]!
    accessLvl: Int!
    orders: [Orders]
}

type Product {
    _id: ID!
    productId: String! # Make string, can be product SKU, so custom strings if needed
    name: String
    price: Float!
    tags: [String]
    category: [Category]
    image: String
    description: String
}

type Order {
    products: [Product]
    orderDate: Date
    orderPrice: Float!
    status: String!
    orderId: INT!
    address: [Address]
    user: [User]
}

  type Address {
    number: String! # Street number (could include apt. number/letter)
    streetName: String! 
    province: String!
    country: String!
    postalCode: String!
    deliveryNotes: String! # I.e. "Ring doorbell" or "phone when arrived"
  }

type Auth {
    token: ID
    user: User
  }

  type Category{
    name: String!
  }

  type Checkout {
    session: ID
  }

  type Query {
    orders: [Order]!
    order(orderId: INT!)
    products: [Products]
    product(productId: Int!)
    users: [User]!
    user(_Id: ID!)
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, userName: String!, accessLvl: Int!): User
    updateUser(id: ID!, firstName: String!, lastName: String!, email: String!, password: String!, phone: String!): User
    removeUser(id: ID!): User
    addAddress(): User
    updateAddress(): User
    removeAddress(): User
    addProduct(productId: String!, name: String! price: Float!, category: [Category]): Product
    updateProduct(): Product
    removeProduct(productId: String!): Product
    addOrder(products: [Product], orderDate: Date, orderPrice: Float!): Order
    updateOrder(): Order
    removeOrder(orderId: Int!): Order
  }
`

module.exports = typeDefs;