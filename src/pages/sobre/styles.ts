import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--pink);
  padding: 5rem 0;
`;

export const Content = styled.div`
  width: 40%;
  color: var(--footer);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    font-weight: 700;
    font-size: 2.25rem;
  }

  p {
    text-align: justify;
    background-color: var(--gray);
    padding: 4rem;
    color: var(--black);
    font-weight: 300;
    font-size: 1rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;

    a {
      color: inherit;
      text-decoration: inherit;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;
