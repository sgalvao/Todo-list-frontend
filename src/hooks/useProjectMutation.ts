import { useMutation } from "@apollo/client";
import {
  CREATE_PROJECT,
  DELETE_PROJECT,
  UPDATE_PROJECT,
} from "graphql/mutations/project";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-toastify";
import { ProjectsProps } from "types/api";

interface FormProps {
  name: string;
}

const useProjectMutation = (data: ProjectsProps) => {
  const { data: session } = useSession();

  const [projects, setProjects] = useState(data.loadProjects);

  const [createProject] = useMutation(CREATE_PROJECT);
  const [deleteProject] = useMutation(DELETE_PROJECT);
  const [updateProject] = useMutation(UPDATE_PROJECT);

  const handleAddProject = async ({ name }: FormProps) => {
    try {
      const data = await createProject({
        variables: {
          name,
        },
        context: { session },
      });

      const project = {
        id: data.data.createProject.id,
        name,
        tasks: [],
      };
      console.log(data.data.createProject.id);

      setProjects([...projects, project]);
      toast.success("Project created successfully");
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  const handleDeleteProject = async (id: string) => {
    try {
      await deleteProject({
        variables: {
          deleteProjectId: id,
        },
        context: { session },
      });
      console.log(id);
      toast.success("Project deleted successfully");
      setProjects(projects.filter((project) => project.id !== id));
    } catch (e: any) {
      console.log(id);
      toast.error(e.message);
    }
  };

  const handleUpdateProject = async (id: string, name: string) => {
    try {
      await updateProject({
        variables: {
          updateProjectId: id,
          name: name,
        },
        context: { session },
      });
      toast.success("Project updated successfully");
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  return {
    projects,
    handleAddProject,
    handleDeleteProject,
    handleUpdateProject,
  };
};

export default useProjectMutation;
