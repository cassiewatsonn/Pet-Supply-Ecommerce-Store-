import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
query getUsers {
  users {
    _id
    firstName
    lastName
    accessLvl  
  }
}
`;

export const SINGLE_USER = gql`
query GetUser($userId: ID!) {
  user(id: $userId) {
    _id
    accessLvl
    firstName
    lastName
    phone
    email
    password
    address {
      number
      streetName
      province
      postalCode
      country
    }
 }
}
`;

export const QUERY_PRODUCT = gql`
 query product($productId: String!) {
  product(productId: $productId) {
    description
    name
    _id
    image
    price
    stockCount
    productId
    tags
  }
}
`;

export const QUERY_PRODUCTS = gql`
query Product {
  products {
    description
    name
    _id
    image
    price
    stockCount
    productId
    tags
  }
}
`;

export const QUERY_ORDERS = gql`
query orders {
  orders {
    orderId
    orderDate
    orderPrice
    status
    user {
      username
    }
    products {
      _id
      name
      price
      stockCount
    }
  }
}
`;

export const QUERY_ORDER = gql`
query Order($orderId: Int!) {
  order(orderId: $orderId) {
    orderId
    orderDate
    user {
      lastName
      firstName
    }
    orderPrice
    products {
      productId
      name
      price
      stockCount
    }
    status
   }
}
`;


// export const LOGIN = gql`
//   query login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       user {
//         _id
//         firstName
//         lastName
//         email
//         accessLvl
//         phoneNumber
//       }
//     }
//   }
// `;


