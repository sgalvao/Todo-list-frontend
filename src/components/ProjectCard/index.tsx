import { useState } from "react";

import { FiEdit3 } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

import * as S from "./styles";
import { Task } from "components/Task";
import { AddTaskModal } from "components/AddTask";
import { Project, TaskProps } from "types/api";
import { UpdateNameModal } from "components/UpdateNameModal";

import useTaskMutation from "hooks/useTaskMutation";

interface ProjectCardProps {
  project: Project;
  onRemove: (id: string) => void;
  onUpdate: (id: string, name: string) => void;
}

interface FormValues {
  name: string;
  description: string;
}

export const ProjectCard = ({
  project,
  onRemove,
  onUpdate,
}: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [projectName, setProjectName] = useState(project.name);
  const [openUpdate, setOpenUpdate] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleUpdateClose = () => {
    setOpenUpdate(false);
  };

  const handleUpdate = (newName: string) => {
    onUpdate(project.id, newName);
    setProjectName(newName);
    handleUpdateClose();
  };

  const { handleCreateTask, handleDeleteTask, handleUpdateTask, tasks } =
    useTaskMutation({ project, handleClose });

  return (
    <S.Container>
      <UpdateNameModal
        onClose={handleClose}
        isOpen={openUpdate}
        onSubmit={handleUpdate}
      />
      <S.Info>
        <S.Title>{projectName}</S.Title>
        <S.EditInfo onClick={() => setOpenUpdate(true)}>
          <FiEdit3 size={16} />
        </S.EditInfo>
        <S.RemoveProject onClick={() => onRemove(project.id)}>
          <BsTrash size={16} />
        </S.RemoveProject>
      </S.Info>
      <S.Divider />
      <S.Content>
        <S.TodoList>
          {tasks.map((task: TaskProps) => {
            if (task.status === "DONE") {
              return (
                <Task
                  key={task.id}
                  task={task}
                  onRemove={handleDeleteTask}
                  onChange={handleUpdateTask}
                />
              );
            }
            return (
              <Task
                key={task.id}
                task={task}
                onRemove={handleDeleteTask}
                onChange={handleUpdateTask}
              />
            );
          })}
        </S.TodoList>
        <S.Wrapper>
          <S.AddTaskButton onClick={() => setIsOpen(true)}>
            <AiOutlinePlus size={16} />
          </S.AddTaskButton>
        </S.Wrapper>
      </S.Content>
      <AddTaskModal
        isOpen={isOpen}
        onClose={handleClose}
        onSubmit={handleCreateTask}
      />
    </S.Container>
  );
};
