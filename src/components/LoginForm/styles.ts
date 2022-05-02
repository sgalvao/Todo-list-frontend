import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 60rem;
  align-items: center;
  justify-content: center;
  background-color: #202124;
  padding: 2rem;
`;

export const Form = styled.form`
  margin-top: auto;
  width: 100%;
`;

export const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-family: "Fira Code", monospace;
  font-size: 1.8rem;
  font-weight: 700;
  color: #000;
  letter-spacing: 2px;
  background-color: #ffc107;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  outline: none;
  margin: 1rem 0;
  text-align: center;
  transition: all 0.3s ease-in-out;
  border: 1px solid #494b4e;
  &:hover {
    background-color: #494b4e;
    color: #f8f8f8;
  }
`;

export const Spinner = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border-top: 2px solid #f8f8f8;

  animation: spin 0.4s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Error = styled.span`
  color: red;
  font-family: "Fira Code", monospace;
  font-size: 1.2rem;
  margin: 0.8rem 0;
  text-align: center;
`;

export const Footer = styled.div``;

export const CreateAccountButton = styled.p`
  font-family: "Fira Code", monospace;
  font-size: 1.4rem;
  color: #494b4e;
  margin: 0.8rem 0;
  border: 1px solid #494b4e;
  padding: 0.8rem 1.2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #ffc107;
    border: 1px solid #ffc107;
  }
`;
