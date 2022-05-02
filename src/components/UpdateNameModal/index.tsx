import Input from "components/Input";
import { useClickOutside } from "hooks/useClickOutside";
import { useRef, useState } from "react";
import { BsXCircle } from "react-icons/bs";
import * as S from "./styles";

interface Props {
  onSubmit: (value: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const UpdateNameModal = ({ onSubmit, isOpen, onClose }: Props) => {
  const [name, setName] = useState("");

  return (
    <S.Container isOpen={isOpen}>
      <S.CloseButton onClick={onClose}>
        <BsXCircle size={16} />
      </S.CloseButton>
      <S.Title>Update Name</S.Title>
      <Input
        placeholder="Update name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <S.Button onClick={() => onSubmit(name)}>Update</S.Button>
    </S.Container>
  );
};
