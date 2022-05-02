export type UserProps = {
  id: string;
  name: string;
  token: string;
};

export type Project = {
  id: string;
  name: string;
  tasks: TaskProps[];
};

export type TaskProps = {
  id: string;
  name: string;
  description: string;
  status: string;
  finishedAt: string;
};

export type ProjectsProps = {
  loadProjects: Project[];
};
