import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 1rem 0;
`;

export const ContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  margin-left: 1rem;
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background-color: #fff;
  border-radius: 1.6rem;
  border: none;

  svg {
    fill: #202124;
    transition: all 0.2s ease-in-out;
    animation: fadeIn 0.5s ease-in-out;
    &:hover {
      cursor: pointer;
      fill: #ff0000;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

export const Description = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  color: #fff;
  margin-left: 1rem;
  max-width: 28rem;
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const RemoveTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.2rem;
  height: 2.2rem;
  background-color: #fff;
  border-radius: 1.6rem;
  border: none;
  margin-left: 2rem;

  svg {
    fill: #202124;
    transition: all 0.2s ease-in-out;
    &:hover {
      cursor: pointer;
      fill: #ff0000;
    }
  }
`;

export const FinishedTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FinishedTaskText = styled.span`
  color: #fff;
  margin-left: 1rem;

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
