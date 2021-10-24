import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    text-align: center;

    h1 {
      width: 20rem;
      font-weight: 700;
      font-size: 2.25rem;
      padding-left: 0.2rem;
      letter-spacing: 0.2rem;
    }

    svg {
      transition: color 0.2s ease-in-out;

      &:hover {
        cursor: pointer;
        color: var(--pink);
      }
    }
  }

  p {
    font-weight: 600;
    font-size: 1.5rem;
    color: #350668;
    padding-left: 0.1rem;
    letter-spacing: 0.1rem;
  }
`;
