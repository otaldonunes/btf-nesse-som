import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.footer`
  background: var(--footer);
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  color: var(--white);
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 55%;
  padding: 1.75rem 0;

  img {
    width: 12rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    p {
      font-size: 0.75rem;
      font-weight: 400;
      text-align: center;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;

      a {
        color: inherit;
        text-decoration: inherit;
        display: flex;
        align-items: center;

        gap: 0.5rem;

        p {
          font-size: 0.875rem;
          font-weight: 600;

          &:hover {
            color: ${shade(0.2, '#fff')};
          }
        }
      }
    }
  }
`;
