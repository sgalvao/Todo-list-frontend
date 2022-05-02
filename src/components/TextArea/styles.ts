import { TextareaHTMLAttributes } from "react";
import styled, { css } from "styled-components";

type InputProps = {
  error?: string | undefined | boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  width: 100%;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  font-family: "Fira Code", monospace;
  font-size: 1.5rem;
  font-weight: 700;
  color: #f8f8f8;
`;

export const Input = styled.textarea<InputProps>`
  ${({ error }) => css`
    width: 100%;
    height: 14rem;
    font-family: "Roboto", sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 0.6rem;
    background-color: #494b4e;
    color: #f8f8f8;
    &::placeholder {
      color: #f3f3f3;
      font-family: "Roboto", sans-serif;
    }
    outline: none;
    border-radius: 0.5rem;
    border: none;
    margin: 1rem 0;
    border: 0.1rem solid ${error ? "red" : "transparent"};
  `}
  &::-webkit-scrollbar {
    display: none;
  }

  resize: none;
`;

export const Error = styled.span`
  color: red;
  font-size: 1.2rem;
  padding: 0.8rem 0;
  color: red;
`;
