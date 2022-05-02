import { InputHTMLAttributes } from "react";

import * as S from "./styles";

type InputProps = {
  label?: string;
  error?: string;
  touched?: boolean;
  size?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ label, error, touched, size, ...rest }: InputProps) => (
  <S.Container>
    {label && <S.Label>{label}</S.Label>}
    <S.InputWrapper>
      <S.Input size={size} error={touched && error} {...rest} />
      {error && touched && <S.Error>{error}</S.Error>}
    </S.InputWrapper>
  </S.Container>
);

export default Input;
