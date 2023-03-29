const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID!
    email: String!
    firstName: String!
    lastName: String!
    password: String!
    phone: String!
    address: [Address]!
    accessLvl: Int!
    orders: [Order]
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
    stockCount: Int!

}

type Order {
    products: [Product]
    orderDate: String!
    orderPrice: Float!
    status: String!
    orderId: Int!
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
  primary: Boolean!
  addressId: Int! # will be array indicator for update/delete
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
  order(orderId: Int!): Order
  products: [Product]
  product(productId: Int!): Product
  users: [User]!
  user(_Id: ID!): User
}

type Mutation {
  addUser(firstName: String!, lastName: String!, email: String!, password: String!, accessLvl: Int!): User
  updateUser(id: ID!, firstName: String!, lastName: String!, email: String!, password: String!, phone: String!): User
  removeUser(id: ID!): User
  addAddress(id: ID!, number: String!, streetName: String!, province: String!, country: String!, postalCode: String!, deliveryNotes: String, primary: Boolean!, addressId: Int!): User
  updateAddress(id: ID!, number: String, streetName: String!, province: String!, country: String!, postalCode: String!, deliveryNotes: String, primary: Boolean!, addressNo:Int!): User
  removeAddress(id: ID!, addressId: Int!): User
  addProduct(productId: String!, name: String! price: Float!, category: [String]): Product
  updateProduct(productId: String!, name: String, price: Float, tags:[String], category: [String], image: String, description: String, stockCount: Int!): Product
  removeProduct(productId: String!): Product
  # addOrder(products: [Product], orderDate: Date, orderPrice: Float!): Order
  # updateOrder(): Order
  # removeOrder(orderId: Int!): Order

}`

module.exports = typeDefs;