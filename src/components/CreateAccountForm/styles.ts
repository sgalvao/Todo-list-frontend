import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #202124;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  font-family: "Fira Code", monospace;
  color: #fff;
  margin: 1rem;
  text-align: center;
`;

export const Form = styled.form`
  margin: auto;
  width: 100%;
  max-width: 60rem;
`;

export const Button = styled.button`
  width: 100%;
  height: 3rem;
  background-color: #ffc107;
  border: none;
  border-radius: 0.5rem;
  color: #202124;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 2rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #ffd54f;
  }

  &:disabled {
    background-color: #ffc107;
    color: #202124;
    cursor: not-allowed;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
`;

export const Avatar = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 1rem;
  border: 1px solid #ffc107;
  margin-bottom: 1rem;
`;

export const Edit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  background-color: rgba(255, 193, 7, 0.5);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #ffd54f;
    svg {
      fill: #202124;
      transition: all 0.3s ease-in-out;
    }
  }
`;
