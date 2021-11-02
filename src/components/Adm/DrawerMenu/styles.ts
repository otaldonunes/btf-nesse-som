import styled from 'styled-components';
import { shade } from 'polished';

const pink = '#FF009A';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  background: var(--white);

  .imageContent {
    background: var(--footer);
    border-radius: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
      width: 12rem;
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    a {
      cursor: pointer;
      width: 100%;
      border: 2px solid var(--footer);
      border-radius: 4rem;
      padding: 1rem;
      transition: 0.2s ease-in-out;
      color: var(--footer);
      font-size: 1.5rem;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      &:focus,
      :active,
      :link {
        text-decoration: none;
      }

      &:hover {
        color: var(--white);
        background: var(--footer);
        text-decoration: none;

        svg {
          fill: var(--white);
        }
      }
    }
  }

  button {
    position: static;
    width: 3rem;
    height: 3rem;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    background: var(--pink);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    transition: background 0.2s ease-in-out;

    &:hover {
      background: ${shade(0.2, pink)};
    }
  }
`;
