import { gql } from '@apollo/client';


export const ADD_USER = gql`
mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $accessLvl: Int!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, accessLvl: $accessLvl) {
      accessLvl
      firstName
      lastName
      email
      password
      _id
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
export const ADD_PRODUCT = gql`
  mutation addProduct(
    $productId: String!
    $name: String!
    $price: Float!
    $category: String
    $tags: [String]
    $stockCount: Int!
    $image: String
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


// export const UPDATE_USER = gql``
// updateAddress(id: ID!, number: String, streetName: String!, province: String!, country: String!, postalCode: String!, deliveryNotes: String, primary: Boolean!, addressNo:Int!): User
// removeAddress(id: ID!, addressId: Int!): User
// updateProduct(productId: String!, name: String, price: Float, tags:[String], category: [String], image: String, description: String, stockCount: Int!): Product
// removeProduct(productId: String!): Product

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
        accessLvl
        phoneNumber
      }
    }
  }
`;

// export const LOGIN = gql`
//   mutation login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       user {
//         _id
//       }
//     }
//   }
// `;