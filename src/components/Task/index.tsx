import * as S from "./styles";
import { AiOutlineCheck } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { TaskProps } from "types/api";
import { useDate } from "hooks/useDate";

interface ITaskProps {
  task: TaskProps;
  onChange: (taskId: string) => void;
  onRemove: (taskId: string) => void;
}

export const Task = ({ task, onChange, onRemove }: ITaskProps) => {
  console.log(task);

  return (
    <S.Container>
      <S.Checkbox
        onClick={() => (task.status === "DONE" ? null : onChange(task.id))}
      >
        {task.status === "DONE" && <AiOutlineCheck size={12} />}
      </S.Checkbox>
      <S.ContentBox>
        <S.Wrapper>
          <S.Title>{task.name}</S.Title>
          <S.Description>{task.description}</S.Description>
          {task.status === "DONE" && (
            <S.FinishedTask>
              <S.FinishedTaskText>
                Task finished at: {useDate(task.finishedAt)}
              </S.FinishedTaskText>
            </S.FinishedTask>
          )}
        </S.Wrapper>
      </S.ContentBox>
      {task.status !== "DONE" && (
        <S.RemoveTask onClick={() => onRemove(task.id)}>
          <BsTrash size={16} />
        </S.RemoveTask>
      )}
    </S.Container>
  );
};
