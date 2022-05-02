import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: 0;
  box-sizing: border-box;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  display: none;
  height: 100%;
  width: 100%;
  background-color: #202124;
  background-image: url("/img/andamento.gif");
  object-fit: contain;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${media.greaterThan("medium")`
    display: flex;
    `}
`;

export const Input = styled.input``;
