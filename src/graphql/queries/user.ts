import { gql } from "@apollo/client";

export const LOAD_USER_QUERY = gql`
  query LoadUser {
    loadUser {
      id
      avatar {
        url
        id
      }
      name
      avatarId
      email
    }
  }
`;

export const GET_USERS_QUERY = gql`
  query GetUsers {
    getUsers {
      id
      name
    }
  }
`;
