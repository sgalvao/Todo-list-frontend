import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 40rem;
  min-width: 35rem;
  height: 50rem;
  background-color: #202124;
  border-radius: 1.6rem;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 1rem;
`;

export const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 1rem;
`;

export const Task = styled.div`
  color: #fff;
`;

export const DoneList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 1rem;
`;

export const Info = styled.div`
  display: flex;
`;

export const EditInfo = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  background-color: #f8f8f8;
  margin-left: 1rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #fff;
  }
`;

export const RemoveProject = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  background-color: #f8f8f8;
  margin-left: 1rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #fff;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 2rem;
`;

export const AddTaskButton = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  background-color: #f8f8f8;
  margin-left: 1rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #fff;
  }
`;
