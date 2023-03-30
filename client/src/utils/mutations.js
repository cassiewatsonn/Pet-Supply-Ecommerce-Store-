import { gql } from '@apollo/client';


export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $userId: ID!
    $firstName: String
    $lastName: String
    $email: String
    $phone: String
   ) {
    updateUser(
      id: $updateUserId
      firstName: $firstName
      lastName: $lastName
      email: $email
      phone: $phone
    ) {
      user
    }
}`;

export const UPDATE_PASSWORD = gql`
  mutation updatePassword(
    $userId: ID!
    $password: password
  ) {
    updateUser(
      id: $userId
    ) {
      user
    }
  }
`

export const REMOVE_USER = gql`
  mutation removeUser(
    $userId: ID!
  ) {
    removeUser(
      id: $userId
    ) {
      user
    }
  }
`

// export const UPDATE_USER = gql``
// removeUser(id: ID!): User
// addAddress(id: ID!, number: String!, streetName: String!, province: String!, country: String!, postalCode: String!, deliveryNotes: String, primary: Boolean!, addressId: Int!): User
// updateAddress(id: ID!, number: String, streetName: String!, province: String!, country: String!, postalCode: String!, deliveryNotes: String, primary: Boolean!, addressNo:Int!): User
// removeAddress(id: ID!, addressId: Int!): User
// addProduct(productId: String!, name: String! price: Float!, category: [String]): Product
// updateProduct(productId: String!, name: String, price: Float, tags:[String], category: [String], image: String, description: String, stockCount: Int!): Product
// removeProduct(productId: String!): Product

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;