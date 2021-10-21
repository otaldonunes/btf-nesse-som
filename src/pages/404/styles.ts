import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 80%;
  max-width: 55rem;
  color: var(--footer);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  h1 {
    font-size: 3rem;
    font-weight: 700;
  }

  p {
    font-weight: 700;
    font-size: 3rem;

    &:first-child {
      letter-spacing: 1.4em;
      padding-left: 1.4em;
    }

    &:last-child {
      font-size: 1.5rem;
      font-weight: 400;
      margin-top: 1rem;
    }

    &:nth-child(2) {
      color: var(--pink);
      font-weight: bold;
      font-size: 18rem;
    }
  }
`;
