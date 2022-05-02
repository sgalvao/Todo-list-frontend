import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 0 20px 0px 30px;
  background: #0c0c0c;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.6);
`;

export const Logo = styled.span`
  font-family: "dancing script", cursive;
  font-size: 26px;
  color: #fff;
  transition: all ease-in 0.3s;

  &:hover {
    cursor: pointer;
    color: #ffc107;
  }
`;

export const ExitIcon = styled.div`
  svg {
    fill: #fff;
    transition: all 0.5s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    svg {
      fill: #ffc107;
    }
  }
`;

export const Title = styled.h1``;
