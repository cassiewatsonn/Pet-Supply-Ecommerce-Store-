import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
query users($id: ID!) {
  user(_Id: $id) {
    _id
    firstName
    lastName
    username
    email
    accessLvl
  }
}
`;

export const SINGLE_USER = gql`
query user($id: ID!) {
  user(_Id: $id) {
    _id
    firstName
    lastName
    username
    phone
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

export const QUERY_PRODUCTS = gql`
 query products($productId: Int!) {
  product(productId: $productId) {
    _id
    name
    price
    description
    stockCount
    image
    category {
      name
    }
  }
}
`;

export const QUERY_PRODUCT = gql`
query product {
  products {
    _id
    productId
    name
    description
    price
    stockCount
    image
    tags
    category {
      name
    }
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


