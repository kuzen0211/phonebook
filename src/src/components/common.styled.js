import styled from 'styled-components';
import 'index.css';

export const Container = styled.div`
  max-width: 1600;
  padding: 1rem 2rem;
`;

export const AppTitle = styled.h1`
  display: block;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: var(--bgcolor-accent);
`;

export const Title = styled.h2`
  display: block;
  font-size: 0.7rem;
  font-weight: 400;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  width: fit-content;
  height: fit-content;
  margin: 2rem auto;
`;

export const ContactsContainer = styled.div`
  /* display: grid;
  grid-template-columns: 400px 1fr;
  gap: 1rem; */
`;

export const AsideOperation = styled.aside`
  padding: 1rem;
`;
