import styled from 'styled-components';
import { shade } from 'polished';

const pink = '#FF009A';
const footer = '#350668';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  .hamburguer {
    border: none;
    border-radius: 50%;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    background: var(--pink);
    position: absolute;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 2rem;
    top: 2rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    transition: background 0.2s ease-in-out;

    &:hover {
      background: ${shade(0.2, pink)};
    }
  }
`;

export const Content = styled.div`
  background: #fffffc;
  height: 100%;
  width: 100%;
  padding: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    width: 80%;
    display: flex;
    flex-direction: column;
    padding: 2rem;

    p {
      align-self: flex-start;
      font-size: 10rem;

      span {
        color: var(--pink);
      }
    }

    img {
      align-self: flex-end;
      width: 50rem;
    }
  }
`;

export const DrawerContent = styled.div`
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

    img {
      width: 12rem;
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    button {
      position: static;
      border: none;
      cursor: pointer;
      overflow: hidden;
      outline: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      width: 100%;
      border-radius: 4rem;
      background: var(--white);
      padding: 1rem;
      transition: background 0.2s ease-in-out;
      color: var(--footer);

      p {
        font-size: 1.5rem;
      }

      &:hover {
        color: var(--white);
        background: var(--footer);

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
