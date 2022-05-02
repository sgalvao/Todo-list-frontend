import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  font-family: "Roboto", sans-serif;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  padding: 1rem 0;
  background-color: #202124;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  gap: 1rem;
  border-radius: 1.6rem;
  padding: 1rem;
  margin: 0 auto;
  background-color: #494b4e;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  ${media.greaterThan("medium")`
  display: grid;
  width: 80%;
  grid-template-columns: repeat(2, 1fr);
  `}

  ${media.greaterThan("large")`
  display: grid;
  width: 80%;
  grid-template-columns: repeat(3, 1fr);
  `}
`;
