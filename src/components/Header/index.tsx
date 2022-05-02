import React from "react";

import * as S from "./styles";
import { IoMdExit } from "react-icons/io";
import { signOut } from "next-auth/react";

export const Header = () => {
  return (
    <S.Container>
      <S.Logo>Todo List - Project</S.Logo>
      <S.ExitIcon onClick={() => signOut()}>
        <IoMdExit size={28} />
      </S.ExitIcon>
    </S.Container>
  );
};
