import styled from "styled-components";

interface Props {
  isOpen: boolean;
}

export const Container = styled.div<Props>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  position: relative;
  position: absolute;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  z-index: 2;
  background-color: #202124;
  border-radius: 2rem;
  padding: 3rem;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const CloseButton = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 1rem;
  top: -1rem;

  svg {
    fill: #fff;
    transition: all 0.2s ease-in-out;

    &:hover {
      cursor: pointer;
      fill: #ff0000;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  justify-self: flex-end;
`;

export const Button = styled.button`
  width: 100%;
  height: 3rem;
  border-radius: 1.6rem;
  border: none;
  background-color: #fff;
  color: #202124;
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 1rem;
  cursor: pointer;
`;
