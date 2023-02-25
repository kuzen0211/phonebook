import styled from 'styled-components';
import 'index.css';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  width: fit-content;
  height: fit-content;
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--bgcolor-accent);
  background-color: var(--main-bgcolor);

  margin: 2rem auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & + & {
    margin-top: 0.75rem;
  }
`;

export const Input = styled.input`
  width: 25rem;
  font-size: 1.25rem;
  padding: 0.5rem;
  margin-top: 0.25rem;

  background-color: var(--main-bgcolor);
  border: 1px solid black;

  color: var(--title-color);
  &::placeholder {
    font-weight: 200;
    color: var(--bgcolor-second);
  }
`;

export const Button = styled.button`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--main-bgcolor);
  padding: 0.5rem 1rem;
  margin-top: 2rem;
  border-radius: 0.25rem;
  border: none;
  background-color: var(--bgcolor-first);
  transition: background-color 250ms ease, color 250ms ease;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--bgcolor-accent);
    color: var(--title-color);
  }
`;
