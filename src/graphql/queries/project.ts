import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query GetProjects {
    loadProjects {
      id
      name
      tasks {
        name
        id
        description
        status
        finishedAt
      }
    }
  }
`;
