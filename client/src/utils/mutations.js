import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation AddUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $accessLvl: Int!) {
  addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, accessLvl: $accessLvl) {
    token
    user {
      accessLvl
      email
      firstName
      lastName
      password
    }
  }
}
`;
export const UPDATE_USER = gql`
  mutation updateUser(
    $userId: ID!,
    $firstName: String,
    $lastName: String,
    $email: String,
    $phone: String,
   ) {
    updateUser(
      id: $userId
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
    $userId: ID!,
    $password: password,
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
export const ADD_PRODUCT = gql`
  mutation addProduct(
    $productId: String!,
    $name: String!,
    $price: Float!,
    $category: String,
    $tags: [String],
    $stockCount: Int!,
    $image: String,
    $description: String
  ) {
    addProduct(
      productId: $productId
      name: $name
      price: $price
      category: $category
      tags: $tags
      stockCount: $stockCount
      image: $image
      description: $description
    )
  }
`
export const REMOVE_PRODUCT = gql`
    mutation removeProduct(
      $productId:String
    ) {
      removeProduct(
        productId: $productId
      )
    }
`
export const LOGIN = gql`
  mutation login(
    $email: String!,
    $password: String!
    ) {
      login(
        email: $email,
         password: $password
         ) {
        token
        user {
      accessLvl
      email
      firstName
      lastName
    }
    }
  }
`;