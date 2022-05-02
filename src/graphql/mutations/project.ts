import { gql } from "@apollo/client";

export const CREATE_PROJECT = gql`
  mutation CreateProject($name: String) {
    createProject(name: $name) {
      name
      id
      tasks {
        id
        name
        description
        status
      }
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation CreateProject($updateProjectId: ID!, $name: String) {
    updateProject(id: $updateProjectId, name: $name) {
      id
      name
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation DeleteProject($deleteProjectId: ID!) {
    deleteProject(id: $deleteProjectId) {
      id
      name
      tasks {
        id
        name
        description
        status
        finishedAt
      }
    }
  }
`;
