import styled from "styled-components";

interface Props {
  isOpen: boolean;
}

export const Container = styled.div<any>`
  width: 100%;
  height: 100%;
  display: ${(props: Props) => (props.isOpen ? "flex" : "none")};
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #202124;
  padding: 2rem;
  border-radius: 0.5rem;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #fff;
  &:hover {
    color: #ffc107;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: none;
  background-color: #fff;
  color: #000;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
`;
