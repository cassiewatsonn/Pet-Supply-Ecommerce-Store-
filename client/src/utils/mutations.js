import { gql } from '@apollo/client';


// User mutations

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

export const REMOVE_USER = gql`
  mutation removeUser($userId: ID!) {
  removeUser(userId: $userId) {
    firstName
    lastName
  }
}
`

export const ADD_ADDRESS = gql`
  mutation AddAddress($userId: ID!, $number: String!, $address1: String, $address2: String, $city: String, $province: String!, $country: String!, $postalCode: String!, $primary: Boolean!, $addressId: Int!) {
    addAddress(userId: $userId, number: $number, address1: $address1, address2: $address2, city: $city, province: $province, country: $country, postalCode: $postalCode, primary: $primary, addressId: $addressId) {
      address {
        number
        address1
        address2
        city
        province
        country
        postalCode
        addressId
      }
    }
  }
`;

export const UPDATE_ADDRESS = gql`
  mutation UpdateAddress($userId: ID!, $number: String!, $address1: String, $address2: String, $city: String, $province: String!, $country: String!, $postalCode: String!, $primary: Boolean!, $addressId: Int!) {
    updateAddress(userId: $userId, number: $number, address1: $address1, address2: $address2, city: $city, province: $province, country: $country, postalCode: $postalCode, primary: $primary, addressId: $addressId) { 
      address {
        number
        address1
        address2
        city
        province
        country
        postalCode
        addressId
      }
    }
  }
`;

export const REMOVE_ADDRESS = gql`
  mutation removeAddress( 
    $userId: ID!,
    $addressId: Int!,
  ) {
    removeAddress(
      userId: $userId
      addressId: $addressId
    )
    {
      address {
        number
        address1
        address2
        city
        province
        country
        postalCode
        addressId
      }
    }
  }
`;

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

export const ADD_PRODUCT = gql`
  mutation addProduct(
    $productId: String!,
    $name: String!,
    $price: Float!,
    $category: String,
    $stockCount: Int!,
    $image: String,
    $description: String
  ) {
    addProduct(
      productId: $productId
      name: $name
      price: $price
      category: $category
      stockCount: $stockCount
      image: $image
      description: $description
    ) {
      name
      price
      stockCount
  }
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

mutation removeProduct($productId: String!) {
  removeProduct(productId: $productId) {
    productId
    stockCount
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
      firstName
      lastName
    }
    }
  }
`;