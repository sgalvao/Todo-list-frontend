import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 30rem;
  max-height: 25rem;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 1rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3.2rem;
  background-color: #fff;
  border-radius: 1.6rem;
  border: none;
  color: #202124;
  font-size: 1.6rem;
  font-weight: 700;
  margin-top: 1rem;
`;
