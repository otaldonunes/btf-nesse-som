import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  width: 100vw;
  background: var(--header);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  color: var(--white);
  /* height: 6.25rem; */
  display: flex;
  align-items: center;
  gap: 3rem;

  img {
    background: var(--header);
    width: 11.25rem;
    position: relative;
    cursor: pointer;
  }

  nav {
    display: flex;
    gap: 3rem;

    a {
      color: inherit;
      text-decoration: inherit;
      font-weight: 600;
      font-size: 1.125rem;

      &:hover {
        color: ${shade(0.2, '#fff')};
      }
    }
  }
`;
