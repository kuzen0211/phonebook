import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.25rem;
  color: var(--bgcolor-accent);
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  width: 23rem;
  font-size: 1.25rem;
  padding: 0.5rem;
  margin-top: 0.25rem;

  background-color: inherit;
  border: 1px solid black;

  color: var(--title-color);
  &::placeholder {
    font-weight: 200;
    font-style: italic;
    color: var(--bgcolor-second);
  }
`;
