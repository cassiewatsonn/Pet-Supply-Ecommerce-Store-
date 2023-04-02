import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation AddUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $accessLvl: Boolean!) {
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
  mutation UpdateUser($userId: ID!, $accessLvl: Boolean, $firstName: String!, $lastName: String!, $email: String!, $phone: String!) {
  updateUser(userId: $userId, accessLvl: $accessLvl, firstName: $firstName, lastName: $lastName, email: $email, phone: $phone) {
    accessLvl
    firstName
    lastName
    email
    phone
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

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($productId: String!, $name: String, $price: Float, $tags: [String], $category: String, $description: String, $stockCount: Int) {
  updateProduct(productId: $productId, name: $name, price: $price, tags: $tags, category: $category, description: $description, stockCount: $stockCount) {
    category
    description
    name
    price
    productId
    stockCount
  }
}
`

export const REMOVE_PRODUCT = gql`
    mutation removeProduct(
      $id: ID!
    ) {
      removeProduct(
        id: $id
      ) {
        category
        name
        price
  }
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
      firstNameString
      lastName
    }
    }
  }
`;