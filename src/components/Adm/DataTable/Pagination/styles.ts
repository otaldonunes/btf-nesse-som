import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;

  p {
    color: var(--footer);
  }

  button {
    border: none;
    border-radius: 50%;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    background: var(--pink);
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s ease-in-out;

    &:hover {
      background: transparent;
      border: 2px solid var(--pink);
      color: var(--pink);

      svg {
        fill: var(--pink);
      }
    }
  }
`;
