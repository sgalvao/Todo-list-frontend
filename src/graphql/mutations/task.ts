import { gql } from "@apollo/client";

export const CREATE_TASK = gql`
  mutation CreateTask($task: TaskInput) {
    createTask(task: $task) {
      id
      name
      description
      status
    }
  }
`;

export const UPDATE_TASK_STATUS = gql`
  mutation CreateTask($updateTaskStatusId: ID!) {
    updateTaskStatus(id: $updateTaskStatusId) {
      id
      name
      description
      status
      finishedAt
    }
  }
`;

export const DELETE_TASK = gql`
  mutation DeleteTask($deleteTaskId: ID!) {
    deleteTask(id: $deleteTaskId) {
      id
      name
      description
      status
    }
  }
`;
