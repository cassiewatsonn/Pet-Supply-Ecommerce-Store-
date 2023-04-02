const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID!
    email: String!
    firstName: String!
    lastName: String!
    password: String!
    phone: String
    address: [Address]!
    accessLvl: Boolean!
    orders: [Order]
}

type Product {
    _id: ID!
    productId: String # Make string, can be product SKU, so custom strings if needed
    name: String
    price: Float!
    tags: [String]
    image: String
    description: String
    stockCount: Int
    category: String

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
    token: ID!
    user: User
  }

type Checkout {
  session: ID
}

type Query {
  orders: [Order]!
  order(orderId: Int!): Order
  products: [Product]
  product(productId: String!): Product
  users: [User]
  user(id: ID!): User
}

type Mutation {
  addUser(firstName: String!, lastName: String!, email: String!, password: String!, accessLvl: Boolean!): Auth
  updateUser(userId: ID!, firstName: String, lastName: String, email: String, phone: String, accessLvl: Boolean): User
  removeUser(userId: ID!): User
  login(email: String!, password: String!): Auth
  updatePassword(userId: ID!, password:String!): User
  addAddress(userId: ID!, number: String!, streetName: String!, province: String!, country: String!, postalCode: String!, deliveryNotes: String, primary: Boolean!, addressId: Int!): User
  updateAddress(id: ID!, number: String, streetName: String, province: String, country: String, postalCode: String, deliveryNotes: String, primary: Boolean!, addressNo:Int!): User
  removeAddress(id: ID!, addressId: Int!): User
  addProduct(productId: String!, name: String!, price: Float!, category: String, tags: [String], stockCount: Int!, image: String, description: String): Product
  updateProduct(productId: String!, name: String, price: Float, tags:[String], category: String, image: String, description: String, stockCount: Int): Product
  removeProduct(id: ID!): Product
  # addOrder(products: [Product], orderDate: Date, orderPrice: Float!): Order
  # updateOrder(): Order
  # removeOrder(orderId: Int!): Order

}`

module.exports = typeDefs;