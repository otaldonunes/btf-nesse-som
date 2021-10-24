import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  a {
    color: inherit;
    text-decoration: inherit;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
