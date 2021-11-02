import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
  gap: 1rem;

  span {
    color: var(--footer);
    font-size: 3rem;
  }

  &:last-child {
    padding: 2rem 0;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .disabled {
    cursor: not-allowed;
  }

  a {
    width: 100%;
    height: 4rem;
    background: var(--footer);
    font-size: 1.4rem;
    color: var(--white);
    display: flex;
    align-items: center;
    border: none;
    border-radius: 4rem;
    padding: 1rem;
    gap: 0.5rem;
    text-decoration: none;
    transition: background 0.2s ease-in-out;

    &:focus,
    :active,
    :link {
      text-decoration: none;
    }

    &:hover {
      text-decoration: none;
      background: transparent;
      border: 2px solid var(--footer);
      color: var(--footer);
    }
  }
`;
