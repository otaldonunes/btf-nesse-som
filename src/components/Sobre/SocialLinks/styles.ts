import styled from 'styled-components';

export const Container = styled.div`
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
`;
