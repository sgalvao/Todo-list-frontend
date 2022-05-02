import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser($user: UserInput) {
    createUser(user: $user) {
      id
      name
      email
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      name
      token
      email
      id
    }
  }
`;
