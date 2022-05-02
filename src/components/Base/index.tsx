import { Header } from "../Header";
import * as S from "./styles";

type Props = {
  children: React.ReactNode;
};

const Base = ({ children }: Props) => {
  return (
    <S.Container>
      <Header />
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export default Base;
