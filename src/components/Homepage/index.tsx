import { AddProject } from "components/AddProject";
import { ProjectCard } from "components/ProjectCard";

import useProjectMutation from "hooks/useProjectMutation";
import { ProjectsProps } from "types/api";
import Base from "../Base";

import * as S from "./styles";

const Homepage = (data: ProjectsProps) => {
  const {
    projects,
    handleAddProject,
    handleDeleteProject,
    handleUpdateProject,
  } = useProjectMutation(data);

  return (
    <Base>
      <S.Container>
        <S.ContentBox>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onRemove={handleDeleteProject}
              onUpdate={handleUpdateProject}
            />
          ))}
          <AddProject onSubmit={handleAddProject} />
        </S.ContentBox>
      </S.Container>
    </Base>
  );
};

export default Homepage;
