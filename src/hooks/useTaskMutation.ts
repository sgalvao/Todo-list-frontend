import { useMutation } from "@apollo/client";
import {
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK_STATUS,
} from "graphql/mutations/task";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Project, TaskProps } from "types/api";

interface Props {
  project: Project;
  handleClose: () => void;
}

const useTaskMutation = ({ project, handleClose }: Props) => {
  const [createTask] = useMutation(CREATE_TASK);
  const [deleteTask] = useMutation(DELETE_TASK);
  const [updateTask] = useMutation(UPDATE_TASK_STATUS);

  const [tasks, setTasks] = useState<TaskProps[]>(project.tasks);

  const { data: session } = useSession();

  interface FormValues {
    name: string;
    description: string;
  }

  const handleCreateTask = async ({ name, description }: FormValues) => {
    try {
      const data = await createTask({
        variables: {
          task: {
            projectId: project.id,
            name,
            description,
          },
        },
        context: { session },
      });

      const task = {
        id: data.data.createTask.id,
        name,
        description,
        projectId: project.id,
        status: data.data.createTask.status,
        finishedAt: data.data.createTask.finishedAt,
      };

      setTasks([...tasks, task]);
      handleClose();
      toast.success("Task created successfully");
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      await deleteTask({
        variables: {
          deleteTaskId: id,
        },
        context: { session },
      });
      toast.success("Task deleted successfully");
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  const handleUpdateTask = async (id: string) => {
    try {
      const data = await updateTask({
        variables: {
          updateTaskStatusId: id,
        },
        context: { session },
      });

      setTasks([
        ...tasks.map((task) =>
          task.id === id
            ? {
                ...task,
                status: data.data.updateTaskStatus.status,
                finishedAt: data.data.updateTaskStatus.finishedAt,
              }
            : task
        ),
      ]);

      toast.success("Task updated successfully");
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  return {
    tasks,
    handleCreateTask,
    handleDeleteTask,
    handleUpdateTask,
  };
};

export default useTaskMutation;
